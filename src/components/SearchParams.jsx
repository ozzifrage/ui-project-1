import styles from "./styles.module.css";
import Slider from 'rc-slider';

import React, { useState } from "react";
import 'rc-slider/assets/index.css';

function SearchParams() {

    const searchTags = ["Vegetarian", "Kosher", "Keto", "Halal", "Healthy", "Comfort"];

	const [settings, editSettings] = useState ({
		timeTaken: 1,
		difficulty: "Easy",
		price: 20
	});
	

	const updateTime = (newTime) => {
		editSettings(previousState => {
			return {...previousState, timeTaken: newTime}
		});
	};

	const updateDiff = (newDiffValue) => {
		editSettings(previousState => {

			if(newDiffValue == 0){
				return {...previousState, difficulty: "Easy"}
			} else if (newDiffValue == 1){
				return {...previousState, difficulty: "Medium"}
			} else if (newDiffValue == 2){
				return {...previousState, difficulty: "Hard"}
			} else {
				return {...previousState, difficulty: "Gordon Ramsey"}
			}
		});
	};

	const updatePrice = (newPrice) => {
		editSettings(previousState => {
			return {...previousState, price: newPrice}
		});
	};


    return (
        <>
            <div className={styles.backgroundBox}>
                <h1>Search Filters</h1>
            </div>

            <div className={styles.sliderBox}>
                <p>Time to Make </p>
					<Slider
						defaultValue={1}
						min={0}
						max={12}
						dots={false}
						step={1}
						onChange={updateTime}

						trackStyle={{ backgroundColor: "lightcoral", height: 10 }}
						railStyle={{ backgroundColor: "black", height: 10 }}
						handleStyle={{
						borderColor: "steelblue",
						height: 20,
						width: 20,
						marginLeft: -10,
						marginTop: -5,
						backgroundColor: "steelblue"
						
						}}
						/>

				<div className={styles.centerJustify}>
					<p>{settings.timeTaken} hours</p>
				</div>
			</div>

			<div className={styles.sliderBox}>
				<p> Relative Difficulty</p>
				<Slider
					defaultValue={1}
					min={0}
					max={3}
					dots={false}
					step={1}
					onChange={updateDiff}

					trackStyle={{ backgroundColor: "lightcoral", height: 10 }}
					railStyle={{ backgroundColor: "black", height: 10 }}
					handleStyle={{
					borderColor: "steelblue",
					height: 20,
					width: 20,
					marginLeft: -10,
					marginTop: -5,
					backgroundColor: "steelblue"
					}}
					/>

				<div className={styles.centerJustify}>
					<p>{settings.difficulty} difficulty</p>
				</div>
			</div>

			<div className={styles.sliderBox}>
				<p> Price to Make</p>
				<Slider
					defaultValue={10}
					min={0}
					max={150}
					dots={false}
					step={10}
					onChange={updatePrice}

					trackStyle={{ backgroundColor: "lightcoral", height: 10 }}
					railStyle={{ backgroundColor: "black", height: 10 }}
					handleStyle={{
					borderColor: "steelblue",
					height: 20,
					width: 20,
					marginLeft: -10,
					marginTop: -5,
					backgroundColor: "steelblue"
					}}
					/>

				<div className={styles.centerJustify}>
					<p>${settings.price} in ingredients</p>
				</div>
			</div>
            
        </>
    );
}

export default SearchParams;