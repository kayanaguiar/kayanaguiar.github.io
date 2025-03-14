import styles from './brands.module.scss';

function Brands(){
    return(
        <section className={styles.workingBrands}>
            <div className={styles.container}>
                <img src="assets\images\brands\versage.svg" alt="versage"/>
                <img src="assets\images\brands\zara.svg" alt="zara"/>
                <img src="assets\images\brands\gucci.svg" alt="gucci"/>
                <img src="assets\images\brands\prada.svg" alt="prada"/>
                <img src="assets\images\brands\calvinKlein.svg" alt="calvin klein"/>
            </div>
        </section> 
    )
}

export default Brands;