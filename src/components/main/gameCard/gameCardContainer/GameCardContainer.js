import React from "react";
import styles from "./GameCardContainer.module.css";
import PropTypes from "prop-types";
import GameData from "../gameData/GameData";
import ImageNotFound from "../../../../assets/images/image-not-found-pikachu.jpg";
import { DescriptionLoader } from "../../../common/loaders/descriptionLoader/DescriptionLoader";
import CardPictures from "../../../../assets/images/cards/CardPicturesIndex";

const CardContainer = ({
	dataGame,
	toggle,
	gameRanking,
	eventClick,
	setTooltip,
	tooltip,
}) => {
	const { background_image, description, id } = dataGame;
	return (
		<button
			className={
				toggle
					? styles.card__container
					: [
							styles.card__container,
							styles["card__container--list"],
					  ].join(" ")
			}
			onClick={() => eventClick({ open: true, game: dataGame })}
		>
			<div
				className={
					toggle
						? styles.card__container__img__container
						: styles.card__container__img__container
				}
			>
				{CardPictures[`${id}`] ? (
					<img
						srcSet={`${CardPictures[`${id}-mobile`]} 320w, ${
							CardPictures[`${id}`]
						} 768w`}
						sizes={"(max-width:360px) 320px, 768px"}
						src={CardPictures[`${id}-mobile`]}
						className={styles.card__container__img}
						alt="game cover"
					/>
				) : (
					<img
						src={background_image || ImageNotFound}
						className={styles.card__container__img}
						alt="game cover"
					/>
				)}
			</div>
			<GameData
				game={dataGame}
				gameRanking={gameRanking}
				toggle={toggle}
				setTooltip={setTooltip}
				tooltip={tooltip}
			/>
			{description ? (
				<p
					className={
						toggle
							? styles.card__container__description
							: styles["card__container__description--show"]
					}
				>
					{description}
				</p>
			) : (
				<DescriptionLoader numOfLines={5} location="card" />
			)}
		</button>
	);
};

CardContainer.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	genres: PropTypes.string,
	releaseDate: PropTypes.string,
	platform: PropTypes.array,
};

export default CardContainer;
