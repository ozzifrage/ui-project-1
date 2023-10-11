import styles from "./styles.module.css";

function RecipeCover({imageURL}){
    //JSX: Javascript XML
    return (
        

        <div style={{
            background: "url(" + imageURL + ")",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            height: '20vh',
            width: '15vh',
            alignSelf: 'center',
            position: 'relative', 
            top: 15,
            flex: 1,
            float: "left",
            paddingLeft: 2,
            paddingRight: 2,
            marginLeft: 2,
            marginRight: 2
        }}>
        </div>
        
    );
}

export default RecipeCover;


