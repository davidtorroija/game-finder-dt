import CardList from "./cardList/CardList";
import styles from "./CardContainer.module.css";

import { CardsLoader } from "../../common/loaders/cardsLoader/CardsLoader";

const CardContainer = ({ games, eventClick, display, setTooltip, tooltip }) => {
	return (
		<div className={styles.cardlist__container}>
			{games.length ? (
				<CardList
					display={display}
					games={games}
					eventClick={eventClick}
					setTooltip={setTooltip}
					tooltip={tooltip}
				/>
			) : (
				<CardsLoader numberOfCards={20} />
			)}
		</div>
	);
};

export default CardContainer;
