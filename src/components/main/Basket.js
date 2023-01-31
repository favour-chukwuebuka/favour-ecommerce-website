import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation} from "react-router-dom";
import { Checkoutpage } from "../../pages";

  export function Basket   (props)  {
  const {cartItems,onAdd,onRemove,countCartItems} = props;
  const location = useLocation();
  const itemsPrice = cartItems.reduce((a, c) => a + c.price + c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


  const products = location.state;
  
  return (
    
   <aside className="col-5">
    <div>{cartItems.length === 0 && <div className="cartisempty">Cart Is Empty</div>}</div>
    <h2 className="cartItems">Cart Items</h2>
     {cartItems.map((item) => (
       <div key={item.id}  className="row">
        <div style={{margin:  "4px"}} className="col-2">{item.name}</div>
        <div  className="col-2" >
          <button className="add" onClick={() =>onAdd(item)}>+</button>
          <div className="removeBtn">
          <button onClick={() =>onRemove(item)} className="remove">-</button>
          </div>
        <div className="col-2 text-right">
          {item.qty} x ${item.price.toFixed(2)};
          </div>
        </div>
      </div>
    ))}
            <div>
                <a className="Cartfavour" href="#/cart">
                    Cart {''}
                    {countCartItems? (
                     <button className='badge'>{countCartItems}</button> 
                    ): (
                     ''
                    )}
                    </a>{''}
            </div>
            
    {cartItems.length !== 0 && (
      <>
      <hr  className="underlined"/>
      <div style={{margin: "-50px 0px",position: "static"}}  className="parttwo">
       <div className="row" >
        <div className="col-2">Item Price</div>
        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
       </div>
       <div className="row">
        <div className="col-2">Tax Price</div>
        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
       </div>
       <div className="row">
        <div className="col-2">Shipping Price</div>
        <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
       </div>
       <div className="row">
        <div className="col-2"><strong>Total Price</strong></div>
        <div className="col-1 text-right"><strong> ${totalPrice.toFixed(2)}</strong></div>
       </div>
      </div>

       <div className="row">
       <Link to={"/checkoutpage"} state={cartItems}>
          {<button   className="checkout" type="button" onClick={() =>{}}>
          Checkout
         </button>}
    </Link>

       </div>
      </>
    )}
   </aside>
     )
};
export default Basket;