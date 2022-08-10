import styles from "../../../main/navbar/navitem/Navitem.module.css";
import searchStyles from "./Search.module.css";

const Search = ({ clickEvent, location }) => {
    return (
        <svg
            onClick={clickEvent}
            className={
                location === "header"
                    ? searchStyles.header__search
                    : styles.navbar__icon
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path
                className={styles.st0}
                d="M11.7 10.3c2.1-2.9 1.5-7-1.4-9.1s-7-1.5-9.1 1.4-1.5 7 1.4 9.1c2.3 1.7 5.4 1.7 7.7 0l.1.1 3.8 3.8c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-3.8-3.9c0 .1 0 .1-.1 0zm.3-3.8c0 3-2.5 5.5-5.5 5.5S1 9.5 1 6.5 3.5 1 6.5 1 12 3.5 12 6.5z"
            />
        </svg>
    );
};

export default Search;
