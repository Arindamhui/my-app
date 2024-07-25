import React from "react";

const NewGoal = props => {
    const addGoalHandler = event => {
    event.preventDefault();

    const NewGoal = {
        id: Math.random().toString(),
        text: 'My New Goal!'
    };
    props.onAddGoal(NewGoal);
};

    console.log(NewGoal);
    
    return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input id="1" type="text" required></input>
        <button type="submit">Add Goal</button>
    </form>
    );
};
export default NewGoal;