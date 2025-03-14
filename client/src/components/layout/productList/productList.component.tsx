import { useEffect, useState } from 'react';
import styles from './productList.module.scss';
import {Product} from '../../../types/product.interface';
import { getProduct } from '../../../services/dataService';
import ProductCard from '../../ui/productCard/productCard.component';
import Button from '../../common/button/button.component';
import { productSlice } from '../../../utils/sliceArr';

interface ProductListProps {
    title: string;
    viewAll: boolean;
    max: number
  }
  
function ProductList({title, viewAll, max}: ProductListProps){
    const [prodcuts, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const data = await getProduct();
            setProducts(data);
          } catch (error) {
            setError('Erro ao carregar os produtos');
          }
        };
    
        getProducts();
      }, []);

      if (error) {
        return <p>{error}</p>;
      }
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.productList}>
                {productSlice(prodcuts, max).map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>
            {viewAll && 
              <Button
                  type="button"
                  text='View All'
                  btnStyle='white'
              />
            }
            
        </section>
    )
}

export default ProductList;