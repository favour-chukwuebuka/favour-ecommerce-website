import {useState} from 'react';
import styles from "./Header.module.scss";


export default function Header(props) {
const [showMenu,setShowMenu] = useState(false)




 const hideMenu = () => {
  setShowMenu(false)
 };


 
    return (
        <header>
             <div className={styles.header}>

           <nav className={showMenu ? `${styles["show-nav"]}`
           :`${styles["hide-nav"]}` }>
            
            <ul onClick={hideMenu}>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
            </div>
           </nav>

            </div>
        </header>
    )
}
