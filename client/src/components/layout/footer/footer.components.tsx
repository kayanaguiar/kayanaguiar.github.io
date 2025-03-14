import styles from './footer.module.scss';
import global from '../../../assets/styles/globalStyles.module.css';
import Newsletter from './newsletter/newsletter';
import Payments from './payments/payments';
import Navs from './navs/navs.components';

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={global.container}>
                <div className={styles.wrapper}>
                    <Newsletter/>
                    <Navs/>
                    <Payments/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;