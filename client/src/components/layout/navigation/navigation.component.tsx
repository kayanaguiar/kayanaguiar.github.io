import ListLinks from './links/listLinks.component';
import NavButtons from './navButton/navButton.component';
import styles from './navigation.module.scss'
import globals from '../../../assets/styles/globalStyles.module.css';
import MenuMobile from './menuMobile/menuMobile.component';
import {useLocation, useNavigate } from 'react-router-dom';

function Navigation(){
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/";
    return(
        <nav className={`${styles.navigation} ${!isHome ? styles.borderForHome: ""}`}>
            <div className={styles.logoContainer}>
                <MenuMobile></MenuMobile>
                <h1 className={globals.logo} onClick={() => navigate('/')}>Shop.co</h1>
            </div>
            <ListLinks mobile={false}></ListLinks>
            <NavButtons></NavButtons>
        </nav>
    )
}

export default Navigation;