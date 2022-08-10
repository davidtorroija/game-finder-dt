import Icon from "../../../common/icon/Icon";
import styles from "./Navitem.module.css";

const Navitem = ({
	bold,
	anchorText,
	anchorHref,
	iconName,
	activeLink,
	eventClick,
}) => {
	return (
		<li className={styles.navitem} onClick={eventClick}>
			<Icon name={iconName} />
			<a
				href={anchorHref}
				className={`${bold && styles["navitems--bold"]} 
                ${activeLink && styles.navitems__activelink}`}
			>
				{anchorText}
			</a>
		</li>
	);
};

export default Navitem;
