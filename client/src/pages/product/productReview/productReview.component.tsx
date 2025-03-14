import { useEffect, useState } from 'react';
import Button from '../../../components/common/button/button.component';
import { Review } from '../../../types/review.interface';
import styles from './productReview.module.scss';
import ReviewCard from '../../../components/ui/reviewCard/reviewCard.component';

interface productReviewProps{
    reviews: Review[],
}
const tabs = [
    { id: "PD", label: "Product Details" },
    { id: "RR", label: "Rating & Reviews" },
    { id: "FAQ", label: "FAQs" }
  ];
const PAGE_SIZE = 3;
function ProductReview({reviews}: productReviewProps){

    const [activeTab, setActiveTab] = useState("RR");
    const [loadedReviews, setLoadedReviews] = useState<Review[]>([]);
    const [hasMore, setHasMore] = useState(true); 

    function loadMoreReviews(){
        if (loadedReviews.length >= reviews.length) return;
    
        const nextReviews = reviews.slice(loadedReviews.length, loadedReviews.length + PAGE_SIZE);
        setLoadedReviews((prev) => [...prev, ...nextReviews]);
    
        if (loadedReviews.length + PAGE_SIZE >= reviews.length) {
          setHasMore(false);
        }
      };
    useEffect(() => {
    setLoadedReviews(reviews.slice(0, PAGE_SIZE));
    }, [reviews]);
    return(
        <section className={styles.productReview}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                {tabs.map((tab) => (
                    <li
                    key={tab.id}
                    className={`${styles.item} ${activeTab === tab.id ? styles.checked : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                    >
                    {tab.label}
                    </li>
                ))}
                </ul>
            </nav>
            <div className={styles.moreInfo}>
                <div className={styles.hud}>
                    <h3>All Reviews <span>({reviews.length})</span></h3>
                    <div className={styles.button}>
                        <button type="button" className={styles.filterBtn}><img src="/assets\images\icons\filter.svg" alt="filter" /></button>
                        <select title="Sort by" name="sortBy" id="sortBy" className={styles.sortBy}>
                            <option value="Latest">Latest</option>
                            <option value="Newest">Newest</option>
                        </select>
                        <Button
                            text='Write a review'
                            type='button'
                            btnStyle='black2'
                        />
                    </div>
                </div>
                <section className={styles.content}>
                    <div className={styles.reviewList}>
                        {loadedReviews.map((element, index) => (
                            <ReviewCard key={index} review={element} withDate={true}></ReviewCard>
                        ))}
                    </div>
                    <div className={styles.loadMoreBtn}>

                        <Button 
                        text={hasMore ? "Load more reviews" : "No more reviews"}
                        type='button' 
                        btnStyle='white'
                        onClick={loadMoreReviews} 
                        >
                        </Button>
                    </div>
                </section>
            </div>
            
        </section>
    )
}

export default ProductReview;