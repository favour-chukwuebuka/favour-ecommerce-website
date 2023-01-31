import React from 'react';
import { useState } from "react";
import Basket from '../main/Basket';


export const Navbar = (props) => {
    const [fix, setFix] = useState();
    function setFixed() {
        if(window.scroll >= 50 ) {
            setFix(true)
        }else {
            setFix(false)
        }
    }
    return (
        
        <header>
            
        <nav className='navbar'>
            
        </nav>
        </header>
    )
}