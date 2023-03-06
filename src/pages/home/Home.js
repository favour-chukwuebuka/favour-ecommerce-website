import React from 'react';
import { useState } from 'react';
import { Basket } from '../../components/main/Basket';
import {Main} from "../../components/main/Main";
import { data } from '../../components/main/data';

  const Home = () =>  {
  const {products} = data;
  const [cartItems,setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist,qty: exist.qty + 1 } : x
        )
        );
    } else  {
      setCartItems([...cartItems,{...product,qty: 1}])
    }
  };
    
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1 ) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? {...exist,qty: exist.qty - 1 } : x
        )
      )
    }
  };

    return (
    <section>
      <p className='FAVOURCHUKWUBUKA'></p>
        <div className='block col-2'>
        <Main  onAdd={onAdd} products={products}></Main>
        <Basket countCartItems={cartItems.length} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        <div className='row'>
       </div>  
        </div>
        </section>
    )
}
export default Home;





















