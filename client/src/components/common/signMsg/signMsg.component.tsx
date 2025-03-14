import { useState } from 'react';
import styles from './signMsg.module.css';

function SignMsg(){
    const [showMessage, setshowMessage] = useState(true)

    function removeMessage(){
        setshowMessage(false);
    }
    return(
        <>
        {showMessage && (
        <section id="signMsg" className={styles.signMsg}>
            <div className={styles.container}>
                <p className={styles.msg}>Sign up and get 20% off to your first order. <a className={styles.sign}>Sign Up Now</a></p>
                <button 
                id="signMsgBtn" 
                type="button" 
                onClick={removeMessage}
                className={styles.close}>
                        <img src="assets\images\icons\menu\close.svg" alt='close'/>
                </button>
            </div>
        </section>
        )}
        </>
    )
}

export default SignMsg;