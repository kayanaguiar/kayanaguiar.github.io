import ProductCartItem from "../../components/ui/productCart/productCart.component";
import globals from '../../assets/styles/globalStyles.module.css';
import styles from './cart.module.scss';
import { useState, useEffect } from "react";
import { getFromLocalStorage, removeItemFromLocalStorage } from "../../services/localStorage";
import { ProductCart } from "../../types/product.interface";
import CartSummary from "./CartSummary/cartSummary.component";
import Breadcrumb from "../../components/common/breadCrumb/breadcrumb.component";

function Cart(){
    const [retrievedData, setRetrievedData] = useState<ProductCart[]>([]);

    useEffect(() => {
        const storedValue = getFromLocalStorage();
        if (storedValue) {
            setRetrievedData(storedValue);
        }
    }, []);
    
    const handleRemoveItem = (productId: number) => {
        removeItemFromLocalStorage(productId);
        setRetrievedData((prevItems) => prevItems.filter(item => item.productId !== productId));
      };

      const handleUpdateItem = (productId: number, updatedData: Partial<ProductCart>) => {
        setRetrievedData(prevCart =>
          prevCart.map(item =>
            item.productId === productId ? { ...item, ...updatedData } : item
          )
        );
      };
    return(
        <section className={styles.cart}>
            <div className={`${globals.container} ${styles.container}`}>
            <Breadcrumb
            items={[
                {
                label: "home",
                path: "/"
                },
                {
                label: 'Cart',
                path: '/Cart',
                current: true
                }

            ]}
            />
                <h1 className={styles.pageTitle}>Your Cart</h1>
                <div className={styles.content}>
                    <div className={styles.items}>
                        {retrievedData.map((element, index) => (
                            <ProductCartItem
                            key={index}
                            productBuy={element}
                            onRemove={handleRemoveItem}
                            onUpdate={handleUpdateItem}
                            />
                        ))}
                    </div>
                    <CartSummary
                    products={retrievedData}
                    />
                </div>
            </div>
            
        </section>
    )
}

export default Cart;