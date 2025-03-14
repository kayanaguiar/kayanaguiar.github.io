import styles from './button.module.scss';

interface Button{
    type: "submit" | "reset" | "button" | undefined,
    text: string,
    btnStyle: "white" | "black" | "white2" | "black2" | "black3",
    onClick?: any;
    disable?: boolean

}

function Button({type, text, btnStyle, onClick, disable}: Button){
    return(
        <button
        type={type}
        className={`${styles.btn} ${styles[btnStyle]}`} 
        onClick={onClick}
        disabled={disable}
        >
            {text}
        </button>
    )
}

export default Button;