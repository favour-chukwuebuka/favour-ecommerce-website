import React from "react";

export function Product  (props) {
  
    const  {product,onAdd}  = props;
    return (
        <article> 
          <img className="small" src={product.image}/>
        <h3 className="name">{product.name}</h3>
        <div className="price">${product.price}</div>
        <div>
        <button className="button" onClick={() => onAdd(product)}>AddToCart</button>
        </div>
        </article>
    )
};
