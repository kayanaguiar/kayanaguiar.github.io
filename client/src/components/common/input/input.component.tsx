import styles from './input.module.scss'

interface InputProps {
    placeholder: string;
    type: string;
    required: boolean;
    inputStyle: "white" | "black" | "gray";
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputIcon?: "search" | "email" | "promo";
    ariaLabel: string;
  }
  

function Input({ placeholder, type, required, inputStyle, inputIcon, value, onChange, ariaLabel }: InputProps) {
    return(
        <input 
            aria-label={ariaLabel}
            placeholder={placeholder} 
            type={type}
            value={value}
            className={`
                ${styles.input} 
                ${styles[inputStyle]} 
                ${styles[inputIcon ? inputIcon : "basic"]} 
            `}
            required={required}
            onChange={onChange}
        />
    )
}

export default Input;
