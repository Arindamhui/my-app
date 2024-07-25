//import the react library flie
import React from "react";
//create a function
const GoalList=props=>{
    console.log(props.goals);
    return(
       
            <ul className="goal-list">
               {props.goals.map(goal=>{
                return <li key={goal.id}>{goal.text}</li>;
               })}
            </ul>
        
    );
};
export default GoalList;