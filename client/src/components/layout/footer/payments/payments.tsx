import styles from'./payments.module.css';

function Payments(){
    return(
        <section className={styles.wrapper}>
            <p className={styles.copy}>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className={styles.payments}>
                <div className={styles.payWay}><img src="assets\images\icons\payments\visa.svg" alt="visa"/></div>
                <div className={styles.payWay}><img src="assets\images\icons\payments\mastercard.svg" alt="mastercard"/></div>
                <div className={styles.payWay}><img src="assets\images\icons\payments\paypal.svg" alt="paypal"/></div>
                <div className={styles.payWay}><img src="assets\images\icons\payments\applepay.svg" alt="applepay"/></div>
                <div className={styles.payWay}><img src="assets\images\icons\payments\googlepay.svg" alt="googlepay"/></div>      
            </div>
        </section>
    )
}

export default Payments;