import styles from './Header.module.css';
import igniteLog from './../../image/ignite.svg';


export function Header(){
    return(

        <header className={styles.header}>
        <strong>
            <img src={igniteLog} alt="Logotipo de Ignite" />
        </strong>
        </header>


    )
}