import ProductInfo from "./info/info.component";
import styles from "./product.module.scss";
import {
  getProductsByDress
} from "../../services/dataService";
import { useEffect, useState } from "react";
import { Product } from "../../types/product.interface";
import { useNavigate, useParams } from "react-router-dom";
import ProductReview from "./productReview/productReview.component";
import ProductList from "../../components/layout/productList/productList.component";
import { useReviews } from "../../hooks/useReview";
import { useProduct } from "../../hooks/useProduct";
import Breadcrumb from "../../components/common/breadCrumb/breadcrumb.component";

function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);  
  const { product, loading: productLoading, error: productError } = useProduct(productId);
  const { reviews } = useReviews(productId);
  const [_, setRelated] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
        window.scrollTo(0, 0);
        if (productError) {
          console.error(productError);
          navigate("/404");
          return;
        }
      try {       
        const fetchRelatedData = await getProductsByDress("Party");
        setRelated(fetchRelatedData);
      } catch (error) {
        console.error(error);
        navigate("/404");
      }
    };

    if (product && !productLoading && !productError) {
      fetchProduct();
    }
  }, [product, productLoading, productError, navigate]);

  useEffect(() => {
    if (productError) {
      navigate("/404");
    }
  }, [productError, navigate]);
  
  return (
    <section className={styles.content}>
      <Breadcrumb
      items={[
        {
          label: "home",
          path: "/"
        },
        {
          label: 'Shop',
          path: '/category'
        },
        {
          label: `${product?.dress}`,
          path: `/category/${product?.dress}`
        }

      ]}
      />
      {product ? (
        <ProductInfo product={product} />
      ) : (
        <div>Loading...</div>
      )}
      <ProductReview reviews={reviews}/>
        <ProductList title="You might also like" viewAll={false} max={4}/>
    </section>
  );
}

export default ProductPage;
