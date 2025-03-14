import { Link } from 'react-router-dom';
import styles from './listLinks.module.scss';

interface ListLinkProps{
    mobile?: Boolean;
    toogleMobile?: () => void
}

function ListLinks({mobile, toogleMobile }: ListLinkProps){
    return(
        <ul className={mobile ? styles.mobileNav: styles.nav}>
            {mobile ? <button onClick={toogleMobile} className={styles.close}><img src="assets\images\icons\close.svg" alt="close" /></button> : null}
            <li className={styles.link}><Link to={'/category'}>Shop <span><img src="assets\images\icons\arrows\bottomArrow.svg" alt="bottomArrow"/></span> </Link></li>
            <li className={styles.link}><Link to={'/category'}>On Sale</Link></li>
            <li className={styles.link}><Link to={'/category'}>New Arrivals</Link></li>
            <li className={styles.link}><a>Brands</a></li>
        </ul>
    )
}

export default ListLinks