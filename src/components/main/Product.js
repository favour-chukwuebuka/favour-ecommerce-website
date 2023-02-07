import React from "react";

export function Product  (props) {
  
    const  {product,onAdd}  = props;
    return (
        <article className="article"> 
          <img className="small" src={product.image} alt=""/>
          <hr className="hr" />
        <h3 className="name">{product.name}</h3>
        <div className="price">${product.price}</div>
        <div>
        <button className="button" onClick={() => onAdd(product)}><i className="check">&#9745;</i></button>
        </div>
        </article>
    )
};
