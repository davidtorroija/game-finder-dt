import React from "react";

import infoJoiner from "../infoJoiner/infoJoiner";
import Icon from "../../../common/icon/Icon";
import PlatformList from "../platformList/PlatformList";

import styles from "./GameData.module.css";

import dateReformatter from "../../../common/date/dateReformatter";
import showTooltip from "../../../common/tooltip/showTooltip";
import hideTooltip from "../../../common/tooltip/hideTooltip";

const GameData = ({ game, gameRanking, toggle, setTooltip, tooltip }) => {
	const { name, genres = "not defined", released, parent_platforms } = game;

	let gameDataStyles;
	let containerStyles;
	let propStyles;
	let iconContainerStyles;
	let numberStyles;
	let genresStyles;
	if (toggle) {
		gameDataStyles = styles.gameData;
		containerStyles = styles.gameData__propertiesContainer;
		propStyles = styles.gameData__propertiesContainer__props;
		iconContainerStyles = styles.iconsContainer;
		numberStyles = styles.gameData__propertiesContainer__number;
		genresStyles = "";
	} else {
		gameDataStyles = [styles.gameData, styles["gameData--list"]].join(" ");
		containerStyles = [
			styles.gameData__propertiesContainer,
			styles["gameData__propertiesContainer--toggle"],
		].join(" ");
		propStyles = [
			styles.gameData__propertiesContainer__props,
			styles["gameData__propertiesContainer__props--toggle"],
		].join(" ");
		iconContainerStyles = [
			styles.iconsContainer,
			styles["iconsContainer--toggle"],
		].join(" ");
		numberStyles = [
			styles.gameData__propertiesContainer__number,
			styles["gameData__propertiesContainer__number--toggle"],
		].join(" ");
		genresStyles = styles["marg-l-40"];
	}

	const openTooltip = (e) => showTooltip(e, tooltip, setTooltip);
	const closeTooltip = () => hideTooltip(tooltip, setTooltip);

	return (
		<div className={gameDataStyles}>
			<div className={containerStyles}>
				<h3
					className={`infoTooltip ${styles.gameData__propertiesContainer__title}`}
					onMouseOver={openTooltip}
					onMouseOut={closeTooltip}
				>
					{name}
				</h3>
				<div className={propStyles}>
					<h6>Release date</h6>
					<h6 className={!toggle ? styles.info : null}>{dateReformatter(released)}</h6>
					<h6 className={genresStyles}>Genres</h6>
					<h6
						className={!toggle ? `infoTooltip ${styles.info}`: "infoTooltip"}
						onMouseOver={openTooltip}
						onMouseOut={closeTooltip}
					>
						{infoJoiner(genres)}
					</h6>
				</div>
			</div>
			<div className={iconContainerStyles}>
				<PlatformList
					listOfPlatforms={parent_platforms}
					toggle={toggle}
					origin="card"
				/>
				<h5 className={numberStyles}>#{gameRanking}</h5>
				{/*eslint-disable-next-line*/}
				<a href="" className={styles.giftBtn}>
					<Icon name="plus" width="8" height="16" />
					<Icon name="giftBox" width="16" height="15" />
				</a>
			</div>
		</div>
	);
};

GameData.propTypes = {};

export default GameData;
