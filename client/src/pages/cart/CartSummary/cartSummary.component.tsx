import { useEffect, useState } from 'react';
import Button from '../../../components/common/button/button.component';
import Input from '../../../components/common/input/input.component';
import styles from '../cart.module.scss';
import { ProductCart } from '../../../types/product.interface';

interface CartSummaryProps{
    products: ProductCart[]
}

function CartSummary({products}: CartSummaryProps){
    const [promo, setPromo] = useState('');
    const [orderValue, setOrderValue] = useState(0);
    const [orderDiscount, setOrderDiscount] = useState<number>(0);
    const deliveryFee = 15;
    useEffect(() => {
        const totalPrice = products.reduce((sum, product) => sum + (product.price * product.count), 0);
        setOrderValue(totalPrice);

        const priceWithDiscount = products.reduce((sum, product) => sum + (product.price - (product.price * (product.discount/100))) * product.count,0)
        const discountPercentage = ((totalPrice - priceWithDiscount) / totalPrice) * 100;
        setOrderDiscount(discountPercentage);
    }, [products]);

    
    return(
        <div className={styles.buyInfo}>
                        <h2 className={styles.title}>Order Summary</h2>
                        <div className={styles.orderWrapper}>
                            <div className={styles.orderItem}>
                                <p>Subtotal</p>
                                <p className={styles.price}>${orderValue}</p> 
                            </div>
                            <div className={styles.orderItem}>
                                <p>Discount <span>(-{Math.round(orderDiscount)}%)</span></p>
                                <p className={`${styles.price} ${styles.red}`}>-${Math.round(orderValue * (orderDiscount/100))}</p> 
                            </div>
                            <div className={styles.orderItem}>
                                <p>Delivery Fee</p>
                                <p className={styles.price}>${deliveryFee}</p> 
                            </div>
                            <div className={`${styles.orderItem} ${styles.total}`}>
                                <p>Total</p>
                                <p className={styles.price}>${((orderValue - (orderValue * (orderDiscount/100))) + deliveryFee).toFixed(2)}</p> 
                            </div>
                        </div>
                        <div className={styles.promoBtns}>
                                <Input
                                    inputStyle="gray"
                                    placeholder="Add promo code"
                                    required={false}
                                    inputIcon="promo"
                                    value={promo}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPromo(e.target.value)}
                                    type="text"
                                    ariaLabel='Promo code'
                                />
                                <Button
                                    type="button"
                                    text="Apply"
                                    btnStyle="black"
                                /> 
                        </div>
                        <Button
                            type="submit"
                            text="Go to checkout"
                            btnStyle="black"
                            />
                    </div>
    )
}

export default CartSummary;