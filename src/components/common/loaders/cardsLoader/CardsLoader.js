import React from "react";
import styles from "../../../main/cardContainer/cardList/CardList.module.css";

export const CardsLoader = ({ numberOfCards, display }) => {
	let listOfCards = [];

	for (let index = 0; index < numberOfCards; index++) {
		listOfCards.push(
			<li key={index} className={styles.card__placeholder}></li>
		);
	}

	return (
		<div className={styles["cardlist--horizontal"]}>
			<ul>{listOfCards}</ul>
		</div>
	);
};
