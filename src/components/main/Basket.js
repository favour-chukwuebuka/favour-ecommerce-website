import React from 'react';
import {Link} from "react-router-dom";

export function Basket (props) {
    const {cartItems, onAdd,onRemove,countCartItems} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty,0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className='col-5'>
            <div>{cartItems.length === 0 &&  <div className='cartisempty'> Cart is Empty</div>}</div>
            <h2 className='cartItems'>Cart Items</h2>
            {cartItems.map((item) =>(
                <div key={item.id} className="row" >
                    <div className='col-1'>{item.name}</div>

                    <div  className='items'>
                    <button className='add' onClick={() => onAdd(item)}>+</button>
                    </div>
                    <div className='col-4'>
                        <button onClick={() =>onRemove(item)} className="remove">-</button>
                    </div>
                    <div className='col-9'>
                        {item.qty} x ${item.price.toFixed(2)};
                    </div>
                </div>
            ))}

            <div>
                <a  className='Cartfavour' href='#/cart'>Cart {''}
                {countCartItems? (
                    <button className='badge'>{countCartItems}</button>
                 ): (
                  ''
                 )}
                </a>{''}
            </div>

            {cartItems.length !== 0 && (
                <>
                <hr className='underlined'/>
                <div className='col-8'>
                    <div>
                        <div style={{textAlign: "left",position: "relative",left: "30px",bottom: "50px"}}>Item Price</div>
                        <div className='col-6 text-right'>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div style={{textAlign: "left",position: "relative",left: "30px",bottom: "50px"}}> Tax Price</div>
                        <div className='col-6 text-right'>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div style={{textAlign: "left",position: "relative",left: "30px",bottom: "50px"}}>Shipping Price</div>
                        <div className='col-6 text-right'>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div style={{textAlign: "left",position: "relative",left: "30px",bottom: "50px"}}>Total Price</div>
                        <div className='col-6 text-right'>${totalPrice.toFixed(2)}</div>
                    </div>
                </div>
                <div>
                <Link to={"/checkoutpage"} state={cartItems}>
                    <button className='checkout' type='button' onClick={() => {}}>
                        Checkout
                    </button>
                </Link>
                </div>
                </>
            )}
        </aside>
    )
}
export default Basket;