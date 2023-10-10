
// React and related libraries
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import styles from "./components/styles.module.css"

import "./App.css";

// My components
import FancyButton from "./components/FancyButton";
import Home from "./components/Home";
import SearchParams from "./components/SearchParams";

function App() {
	return (
		<Router>
			<div className="top6">
				<Link to="/">
					<FancyButton text="Home"></FancyButton>
				</Link>
				<div>
					<h1> Super Cookbook </h1>
				</div>
				<div  className={styles.rightJustify}>
					<FancyButton text="Profile"></FancyButton>
				</div>
				
			</div>

			<Switch>
				<Route path="/" exact> 
					<div>
						<Home></Home>
					</div>
				</Route>
				<Route path="/RecipeParams">
					<div>
						<SearchParams></SearchParams>
					</div>
					
				</Route>
			</Switch>
		</Router>	
	);
}

export default App;