import { Link } from "react-router-dom";
import styles from "./category.module.scss";

function Category() {
  return (
    <section className={styles.category}>
        {/* className="bbdStyle section flexContainer" */}
      <h2 className={styles.title}>Browse by dress style</h2>
      <div className={styles.grid}>

        <Link to={'/category/Casual'} className={`${styles.item} ${styles.casual}`}>
          <p className={styles.titleCard}>Casual</p>
          <img src="assets\images\bbdStyle\casual.png" alt="casual clothes" />
        </Link>
        <Link to={'/category/Formal'} className={`${styles.item} ${styles.formal}`}>
          <p className={styles.titleCard}>Formal</p>
          <img src="assets\images\bbdStyle\formal.png" alt="formal clothes" />
        </Link>
        <Link to={'/category/Party'} className={`${styles.item} ${styles.party}`}>
          <p className={styles.titleCard}>Party</p>
          <img src="assets\images\bbdStyle\party.png" alt="party clothes" />
        </Link>
        <Link to={'/category/Gym'} className={`${styles.item} ${styles.gym}`}>
          <p className={styles.titleCard}>Gym</p>
          <img src="assets\images\bbdStyle\gym.png" alt="gym clothes" />
        </Link>

      </div>
    </section>
  );
}
export default Category;
