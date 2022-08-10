import Icon from "../../common/icon/Icon";
import styles from "./ApiLinks.module.css";

const ApiLinks = ({ name, linkClass, title }) => {
	let styleName;

	switch (name) {
		case "Facebook":
			styleName = `${styles.facebook__container}`;
			linkClass = `${styles.facebook__anchor}`;
			break;
		case "Twitter":
			styleName = `${styles.twitter__container}`;
			linkClass = `${styles.twitter__anchor}`;
			break;
		case "Google":
			styleName = `${styles.google__container}`;
			linkClass = `${styles.google__anchor}`;
			break;
		default:
			styleName = "";
			linkClass = "";
	}

	return (
		<div className={`${styles.apianchor__container} ${styleName}`}>
			<Icon name={name} />
			<a href="#!" className={`${styles.apianchor__anchor} ${linkClass}`}>
				{title}
			</a>
		</div>
	);
};

export default ApiLinks;
