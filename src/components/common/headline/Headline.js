import styles from "./Headline.module.css";

const Headline = ({ title, bold, location }) => {
	let styleName;
	switch (location) {
		case "form":
			styleName = `${styles.form__headline}`;
			break;
		case "navbar":
			styleName = `${styles.navitems__headline}`;
			break;
		case "cardlist":
			styleName = `${styles.cardlist__headline}`;
			break;
		default:
			styleName = "";
	}

	return (
		<h1 className={styleName}>
			{title}
			<strong className={styles.bold}>{bold}</strong>
		</h1>
	);
};

export default Headline;
