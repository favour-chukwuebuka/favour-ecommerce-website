import React from "react";
import {useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Checkoutpage.scss";

const Checkoutpage = (props) => {
    const {state:catItem}=useLocation();
    console.log(catItem)
    const {onAdd} = props;

    return (
        <>
        <section className="propsfather">
        <h2 className="heading2">You have successfully both this products</h2>
    <Link to={'/'}>
        <button className="BUTTONS" onClick={() =>onAdd}>Back to home</button>
    </Link>
    <div className="all">
        {catItem.map(catItem => <div className="all" key={catItem.id}>   <img className="checkoutimage" src={catItem.image}/>
   <h1 className="checkoutpagename">{catItem.name}</h1>    <p  className="checkoutpageprice">${catItem.price}</p>   </div>  )}  
   </div>
        </section>    
        </>



    )

}
export default Checkoutpage;