import React from "react";
import Headline from "../../../common/headline/Headline";
import Icon from "../../../common/icon/Icon";
import styles from "./CardListHeader.module.css";

const CardListHeader = ({ clickEvent, display, getGameDetails, header }) => {
	return (
		<div className={styles.cardlist__header}>
			<div className={styles.cardlist__headline}>
				<Headline
					location="cardlist"
					title={header || "New and trending"}
				/>
				<p>
					{header
						? "Search-based results"
						: "Based on player counts and realease date"}
				</p>
			</div>
			<figure className={styles.cardlist__displays}>
				<Icon
					clickEvent={clickEvent}
					display={display}
					name="horizontal"
				/>
				<Icon
					clickEvent={clickEvent}
					display={display}
					name="vertical"
					getGameDetails={getGameDetails}
				/>
			</figure>
		</div>
	);
};

export default CardListHeader;
