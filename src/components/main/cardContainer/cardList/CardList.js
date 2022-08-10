import GameCardContainer from "../../gameCard/gameCardContainer/GameCardContainer";
import styles from "./CardList.module.css";

const CardList = ({ display, games, eventClick, setTooltip, tooltip }) => {
    return (
        <div
            className={
                display
                    ? styles["cardlist--horizontal"]
                    : styles["cardlist--vertical"]
            }
        >
            <ul>
                {games?.length > 0 &&
                    games.map((game, index) => {
                        return (
                            <li
                                key={game.id + game.name}
                                className={styles.card__placeholder}
                            >
                                <GameCardContainer
                                    dataGame={game}
                                    gameRanking={index + 1}
                                    toggle={display}
                                    eventClick={eventClick}
                                    setTooltip  ={setTooltip}
                                    tooltip={tooltip}
                                />
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default CardList;
