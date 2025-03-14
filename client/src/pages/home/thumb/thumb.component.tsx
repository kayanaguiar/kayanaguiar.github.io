import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/button/button.component';
import styles from './thumb.module.scss';

function Thumb(){
    const navigate = useNavigate();
    return(
        <section className={styles.thumb}>
            <div className={styles.container}>
                <div className={styles.infoWrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Find clothes that matches your style</h2>
                        <p className={styles.paragraph}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <Button
                            type='button'
                            text='Shop Now'
                            btnStyle='black3'
                            onClick={() => navigate('/category')}
                        />
                    </div>
                    <div className={styles.numbers}>
                        <dl className={styles.list}>
                            <div className={styles.item}>
                                <dt className={styles.top}>200+</dt>
                                <dd className={styles.bottom}>International Brands</dd>
                            </div>
                            <div className={styles.item}>
                                <dt className={styles.top}>2,000+</dt>
                                <dd className={styles.bottom}>High-Quality Products</dd>
                            </div>
                            <div className={styles.item}>
                                <dt className={styles.top}>30,000+</dt>
                                <dd className={styles.bottom}>Happy Customers</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className={styles.imgWrapper}>
                    <div className={styles.blackStar}>
                        <img className={styles.smaller} src="assets\images\icons\stars\blackStar.svg" alt="smaller star"/>
                        <img className={styles.bigger} src="assets\images\icons\stars\blackStar.svg" alt="smaller star"/>
                    </div>
                    <img className={styles.thumbImg} src="assets\images\thumb\thumb.png" alt="thumbnail"/>
                </div>
            </div>
        </section>
    )
}

export default Thumb;