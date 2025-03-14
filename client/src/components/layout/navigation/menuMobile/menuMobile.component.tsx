import { useState } from "react";
import ListLinks from "../links/listLinks.component";
import styles from './menuMobile.module.scss';

function MenuMobile(){
    const [mobileMenu, setMobileMenu] = useState(false);

    function toggleMobileMenu(){
        setMobileMenu(!mobileMenu);
    }
    return(
        <div className={styles.hamberguerMenu}>
        <div className={styles.displayNoneMobile} id="menuButton">
            <div className={styles.menuToggle}>
                <input 
                type="checkbox" 
                id="menuCheckbox" 
                className={styles.menuCheckbox}
                aria-label="Menu toggle checkbox"
                onClick={toggleMobileMenu}
                />
                <label htmlFor="menuCheckbox" className={styles.menuIcon}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                {mobileMenu && <ListLinks mobile={true} toogleMobile={toggleMobileMenu} />}
              </div>
        </div>
    </div>  
    )
}

export default MenuMobile;