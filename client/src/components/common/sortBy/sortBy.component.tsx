import styles from './sortBy.module.scss';
function SortBy(){
    return(
        <>
        <label htmlFor="sortByTime" className={styles.sortBy}>Sort by time:</label>
        <select name="sortByTime" id="sortByTime" className={styles.selectSortBy}>
            <option value="Latest">Most Popular</option>
            <option value="Newest">Least Popular</option>
        </select>
        </>
    )
}

export default SortBy;