import styles from "./styles.module.css";
import RecipeRack from "./RecipeRack";
import FancyButton from "./FancyButton";
import SearchParams from "./SearchParams";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Home() {

    return (
        <>
            <Router>
                <div className={styles.backgroundBox}>
                    <h1>Home Page</h1>
                    <RecipeRack></RecipeRack>
                    <p>Favorite Recipes</p>
                    <Link to="/RecipeParams">
					    <FancyButton text="Search our Cookbook"></FancyButton>
				    </Link>
                </div>

                

            </Router>

            <Switch>
				<Route path="/RecipeParams">
					<div>
						<SearchParams></SearchParams>
					</div>
					
				</Route>
			</Switch>

            
            

        </>
    );
}

export default Home;