import globals from '../../assets/styles/globalStyles.module.css';

function NotFound(){
    return(
        <div className={globals.container}>
            <h1 className={globals.title}>404 - Page not found</h1>
        </div>
    )
}

export default NotFound;