import styles from "./styles.module.css";
import RecipeRack from "./RecipeRack";
import FancyButton from "./FancyButton";
import SearchParams from "./SearchParams";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Home() {

    return (
        <>
            <div className={styles.backgroundBox}>
                <h1>Home Page</h1>

                <RecipeRack></RecipeRack>
                <p>Favorite Recipes</p>

                <div className={styles.centerJustify}>
                    <Link to="/SearchParams">
                        <FancyButton text="Search our Cookbook"></FancyButton>
                    </Link>
                </div>
                
                <div className={styles.centerJustify}>
                    <FancyButton text="Your Saved Collections"></FancyButton>
                </div>
            </div>

            <Switch>
				<Route path="/SearchParams">
					<div>
						<SearchParams></SearchParams>
					</div>
					
				</Route>
			</Switch>

            
            

        </>
    );
}

export default Home;