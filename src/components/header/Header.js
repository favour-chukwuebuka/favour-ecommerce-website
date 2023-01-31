import {useEffect, useState} from 'react';
import {Link,NavLink,useNavigate} from 'react-router-dom';
import styles from "./Header.module.scss";
import { FaTimes,FaUserCircle} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER,SET_ACTIVE_USER } from '../../redux/slice/authSlice'; 
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';


const logo = (
    <div className={styles.logo}>
      <Link to={"/"}>
       <h2>
        e<span>Shop</span>.
       </h2>
      </Link>
    </div>
)


const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")

export default function Header(props) {
const [showMenu,setShowMenu] = useState(false)
const [displayName,setDisplayName] = useState("")
const navigate = useNavigate(); 

const dispatch = useDispatch();

// Monitor currently sign in user
useEffect(() => {
    onAuthStateChanged(auth,(user) => {
        if(user) {
          // console.log(user)
          //  const uid = user.uid;
           // console.log(user.displayName)
           if(user.displayName == null ) {
            const u1 = user.email.slice(0, -10);
            const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
           // console.log(uName);
            setDisplayName(uName)
           }else {
            setDisplayName(user.displayName)
           }
        
          dispatch(SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          }))  
        }else {
            setDisplayName("")
            dispatch(REMOVE_ACTIVE_USER())
        }
    });
}, [dispatch,displayName]);

 const toggleMenu = () => {
    setShowMenu(!showMenu)
 };

 const logoutUser = () => {
    signOut(auth).then(() =>  {
        toast.success("Logout successfully.")
        navigate("/")
    }).catch((error) => {

        toast.error(error.message)
    })
 }

 const hideMenu = () => {
  setShowMenu(false)
 };


 
    const [fix, setFix] = useState(false);

    function setFixed() {
        if(window.scrollY >= 100) {
            setFix(true)
        }else {
            setFix(false)
        }
    }
    window.addEventListener("scroll",setFixed)
    return (
        <header>
             <div className={styles.header}>
           {logo}
           <nav className={showMenu ? `${styles["show-nav"]}`
           :`${styles["hide-nav"]}` }>
          
            <div className={showMenu ? `${styles["nav-wrapper"]} ${styles[""]}` : `${styles["nav-wrapper"]}` 
        }
        onClick={hideMenu}
        ></div>
            
            <ul onClick={hideMenu}>
                <li className={styles["logo-mobile"]}>
                    {logo}
                    <FaTimes size={22} color={"#fff"} onClick={hideMenu}/>
                </li>
                <li>
                    <NavLink to={"/"} className={activeLink}>
                        Home
                    </NavLink>
                </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
             <span className={styles.links}>
                <ShowOnLogin>
                <a href="#home" style={{color: "#ff7722"}}>
                   <FaUserCircle size={16} />
                   Hi, {displayName} 
                </a>
                </ShowOnLogin>
                <ShowOnLogin>
                <NavLink to={"/"} onClick={logoutUser}  className={activeLink}>Logout </NavLink>
                </ShowOnLogin>

             </span>
            </div>
           </nav>

         <div className={styles["menu-icon"]}>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
         </div>
            </div>
        </header>
    )
}
