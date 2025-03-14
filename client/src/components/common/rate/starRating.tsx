import styles from "./starRating.module.scss";
import { isDecimal } from "../../../utils/validator/decimal.validator";

interface StarRatingProps {
  rate: number;
  showRate: boolean
}

const StarRating: React.FC<StarRatingProps> = ({ rate, showRate }) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = isDecimal(rate);

  return (
    <div className={styles.rateWrapper}>
      <div className={styles.stars}>
        {Array.from({ length: fullStars }).map((_, index) => (
          <img key={index} src="/assets/images/icons/stars/starFull.svg" alt="Star" className={styles.starIcon} />
        ))}
        {hasHalfStar && (
          <img src="/assets/images/icons/stars/starPart.svg" alt="Half Star" className={styles.starIcon} />
        )}
      </div>
      {showRate && <p>{rate}/5</p>}  
    </div>
  );
};

export default StarRating;
