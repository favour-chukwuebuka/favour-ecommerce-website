import React  from "react";
import { Product } from "./Product";

 export function Main (props)  {
    const  { products,onAdd} = props;
    return (
    <main className="book">
        <h2 className="Products1">Products</h2>
        <div className="All">
          {products && products.map((product) => (
             <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))};
        </div>
    </main>
    );
};