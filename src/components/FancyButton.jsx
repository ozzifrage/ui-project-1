import styles from "./styles.module.css";


function FancyButton({text}) {

    return (
        <>
            <button className={styles.buttonone}>
                {text}
            </button>
        </>
    );
}

export default FancyButton;
