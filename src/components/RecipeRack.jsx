import styles from "./styles.module.css";

import RecipeCover from "./RecipeCover";

function RecipeRack(){
    //JSX: Javascript XML
    return (
        
        <div className={styles.recipeRack}>

            <div style={{
                width: 2000,

            }}>
            </div>

            <RecipeCover imageURL={"/src/assets/pasta.png"}></RecipeCover>
            <RecipeCover imageURL={"/src/assets/yummy-yummy.jpg"}></RecipeCover>



        </div>
    );
}

export default RecipeRack;