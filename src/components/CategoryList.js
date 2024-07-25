//import the react library flie
import React from "react";
//create a function
const CategoryList=props=>{
    console.log(props.category);
    return(
       
            <ul className="category-list">
               {props.category.map(category=>{
                return <li key={category.id}>{category.text}</li>;
               })}
            </ul>
        
    );
};
export default CategoryList;