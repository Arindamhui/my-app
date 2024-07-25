//import the react library flie
import React from "react";
//create a function
const ProductList=props=>{
    console.log(props.products);
    return(
       
            <ul className="product-list">
               {props.products.map(prod=>{
                return <li key={prod.id}>{prod.text}</li>;
               })}
            </ul>
        
    );
};
export default ProductList;