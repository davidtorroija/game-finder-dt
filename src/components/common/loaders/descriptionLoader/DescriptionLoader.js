import React from "react";
import styles from "../../../main/gameCard/gameCardContainer/GameCardContainer.module.css";

export const DescriptionLoader = ({ numOfLines, location }) => {
	const linesOfText = [];

	for (let index = 0; index < numOfLines; index++) {
		linesOfText.push(
			<div
				key={index}
				className={
					location === "card"
						? styles["skeleton-text"]
						: styles["skeleton-text--modal"]
				}
			></div>
		);
	}

	return (
		<div
			className={
				location === "card"
					? styles["card__container__description--show"]
					: styles.modal__container__description
			}
		>
			{linesOfText}
		</div>
	);
};
