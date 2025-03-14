import Brands from "./brands/brands.components";
import Category from "./category/category.component";
import Thumb from "./thumb/thumb.component";
import global from '../../assets/styles/globalStyles.module.css';
import styles from './home.module.scss';
import ProductList from '../../components/layout/productList/productList.component';
import ReviewCard from "../../components/ui/reviewCard/reviewCard.component";
import { useReviews } from "../../hooks/useReview";
import { useEffect, useState } from "react";

function Home(){
    const {reviews} = useReviews(1);
    const [startIndex, setStartIndex] = useState(0);
    const getVisibleCount = () => {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1028) return 2;
        return 3;
      };
    const [visibleCount, setVisibleCount] = useState(getVisibleCount());
    const moveSlider = (direction: "next" | "prev") => {
        if (direction === "next") {
          if (startIndex + visibleCount < reviews.length) {
            setStartIndex(startIndex + 1);
          }
        } else if (direction === "prev") {
          if (startIndex > 0) {
            setStartIndex(startIndex - 1);
          }
        }
      };
      useEffect(() => {
        const handleResize = () => setVisibleCount(getVisibleCount());
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);
    return(
        <>
            <Thumb></Thumb>
            <Brands></Brands>
            <div className={`${global.container} ${styles.content}`}>
                <div className={styles.productLists}>
                    <ProductList
                        title="New Arrivals"
                        viewAll={true}
                        max={4}
                    />
                    <ProductList
                        title="Top selling"
                        viewAll={true}
                        max={4}
                    />
                </div>
                
                <Category></Category>
                <div className={styles.reviewsSection}>
                    <div className={styles.reviewTitle}>
                        <h2 className={styles.title}>Our happy customers</h2>
                        <div className={styles.arrows}>
                            <button id="prev" type="button" className={styles.arrowBtn} onClick={() => moveSlider("prev")}>
                                <img src="assets\images\icons\arrows\left-arrow.svg" alt="left arrow"/>
                            </button>
                            <button id="next" type="button" className={styles.arrowBtn} onClick={() => moveSlider("next")}>
                                <img src="assets\images\icons\arrows\right-arrow.svg" alt="right arrow"/>
                            </button>
                        </div> 
                    </div>
                    <div className={styles.reviewList}>
                        {visibleReviews.map((element, index) => (
                            <ReviewCard
                            key={index}
                            review={element}
                            withDate={false}
                            />

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}   

export default Home;