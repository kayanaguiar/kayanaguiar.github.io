import { useState } from 'react';
import Button from '../../../common/button/button.component';
import Input from '../../../common/input/input.component';
import styles from './newsletter.module.scss';
import { validateEmail } from '../../../../utils/validator/email.validator';

function Newsletter(){
    const [email, setEmail] = useState("");

    function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const validEmail = validateEmail(email);
        
        if (validEmail) {
          alert("Um link de confirmação foi enviado para o seu e-mail. Por favor, verifique sua caixa de entrada.");
        } else {
          alert("Insira um e-mail válido!");
        }
    }
      
    return(
        <form 
        id="newsLetter" 
        className={styles.newsletter}  
        onSubmit={handleNewsletterSubmit}
        aria-labelledby="newsletterFormTitle">
            
            <h3 id="newsletterFormTitle" className={styles.title}>
                Stay upto date about our latest offers
            </h3>
            <div className={styles.inputsContainer}>
                <Input
                    inputStyle='white'
                    placeholder='Enter your email adress'
                    type='email'
                    inputIcon='email'
                    required={true}
                    value={email}
                    ariaLabel="Enter your email address"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                ></Input>
                <Button
                    text='Subscribe to Newsletter'
                    type='submit'
                    btnStyle='white2'
                ></Button>
            </div>
        </form>
    )
}

export default Newsletter;