import styles from './increaseButton.module.scss';
interface IncreaseButtonProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
function IncreaseButton({ count, setCount }: IncreaseButtonProps){
    return(
        <div className={styles.qtdBtn}>
            <button
            className={styles.qtdFunc}
            onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
            >
            -
            </button>
            <span className={styles.value}>{count}</span>
            <button
            className={styles.qtdFunc}
            onClick={() => setCount((prev) => prev + 1)}
            >
            +
            </button>
        </div>
    )
}

export default IncreaseButton;