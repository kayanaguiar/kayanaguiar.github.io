import styles from './productCard.module.scss';
import { Product } from '../../../types/product.interface';
import StarRating from '../../common/rate/starRating';
import { getImagePath } from '../../../utils/getImage';
import { useNavigate } from 'react-router-dom';
import { getDiscountPrice } from '../../../utils/getDiscountPrice';
interface ProductCardProps {
    product: Product;
}

function ProductCard({product}: ProductCardProps){
    const navigate = useNavigate();
    function linkToProduct(id: number){
        navigate(`/product/${id}`)
    }
    return(
        <article className={styles.productCard}>
            <div className={styles.image} onClick={() => linkToProduct(product.id)}>
                <img src={getImagePath(product.image[0])} alt={product.title} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.title}>{product.title.toLowerCase()}</h3>
                <StarRating
                    rate={product.rating}
                    showRate={true}
                />
                <div className={styles.priceWrapper}>
                    <p className={styles.price}>{getDiscountPrice(
                                    product.price, product.discount ? product.discount : 0 
                                    )}</p>
                    {product.discount !== 0 && (
                       <>
                        <p className={styles.discount}>{product.price}</p>
                        <div className={styles.percentage}>
                            <span>{product.discount}%</span>
                        </div>
                       </> 
                    )}
                    
                </div>
            </div>
        </article>
    )
}

export default ProductCard;