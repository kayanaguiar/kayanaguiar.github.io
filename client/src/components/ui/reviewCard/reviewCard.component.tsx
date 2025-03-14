import { Review } from '../../../types/review.interface';
import StarRating from '../../common/rate/starRating';
import styles from './reviewCard.module.scss';
import { dateToText } from '../../../utils/dateConversor';
interface ReviewProps {
    review: Review,
    withDate: boolean
}

function ReviewCard({review, withDate}: ReviewProps){
    return(
        <article className={styles.reviewCard}>
            <StarRating
                rate={review.rating}
                showRate={false}
            />
            <div className={styles.user}>
                <p className={styles.name}>{review.user}</p>
                <img src='\assets\images\icons\check.svg' alt='check mark'/>
            </div>
            <p className={styles.review}>{review.review}</p>

            {withDate && <p className={styles.date}>Posted on <span>{dateToText(review.date.toString())}</span></p>}

        </article>
    )
}

export default ReviewCard;