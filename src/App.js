// import React, {useState} from 'react';
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import './App.css';
// import GoalList from './components/GoalList';
// import ProductList from './components/ProductList';
// import CategoryList from './components/CategoryList';
// import NewGoal from './components/NewGoal/NewGoal';
// import Home from './components/Home';
/*function App() {
  const courseGoals = [
    {id:'cg1',text:'Finish the course'},
    {id:'cg2',text:'Learn all about the Course Material'},
    {id:'cg3',text:'Help other students in the Course'},
  ];
  return (
    
    <div className="course-goals">
      
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
    
  );
}
*/

// function App() {
      
//   const [courseGoals, setCourseGoals] = useState([ 
//     {id:'clg1', text: 'Finish the course'},
//     {id:'clg2', text: 'Within 1 Week'},
//     {id:'clg3', text: 'Get it Done'}
//   ]);

//   const addNewGoalHandler = newGoal => {
//     setCourseGoals(courseGoals.concat(newGoal));
//     // console.log.apply(courseGoals);
//   };
//   return(
    /*
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
      <NewGoal onAddGoal={addNewGoalHandler}/>
    </div>
    */
//    <Router path="/" component={Home} />
//   );
// };
//   export default App;
  /*const productsList = [
    { id: 'P1', text: 'Mouse' },
    { id: 'P2', text: 'Headset' },
    { id: 'P3', text: 'Laptop' }
  ];

  return (
     <div className="Product-List">
      <h2>Products</h2>
      <Products products={productsList} />
    </div>


/*
function App() {
  const productsList = [
    {id:'cg1',text:'Finish the product'},
    {id:'cg2',text:'Learn all about the product'},
    {id:'cg3',text:'Help other students to buy the product'},
  ];
  return (
    <div className="product-list">
      <h2>Product Goals</h2>
      <ProductList products={productsList} />
    </div>
    
  );
}

export default App;
*/

/*function App() {
  const categoryList = [
    {id:'cg1',text:'What are your thoughts on OJ Simpson?'},
    {id:'cg2',text:'Germany invaded Poland.'},
    {id:'cg3',text:'Do Not hire Kurt Cobain to paint your walls.'},
    {id:'cg4',text:'Thums Up is the best soda ever.'}
  ];
  return (
    <div className="category-list">
      <h2>Are These Categories???</h2>
      <CategoryList category={categoryList} />
    </div>
    
  );
}

export default App;*/

// Filename - App.js

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<h1>Arindam Application </h1>
			<h3>Arindam App</h3>
			<Router>
				<Routes>
					<Route path="/home" element={<Home />} exact />
      
					<Route
						path="/create"
						element={<Create />}
					/>
					<Route
						path="/edit"
						element={<Edit />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;