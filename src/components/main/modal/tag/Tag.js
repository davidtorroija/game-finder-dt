import styles from "./Tag.module.css";

const Tag = ({ text, textBold, styleComp }) => {
	let styleName;
	let spanStyleName;

	switch (styleComp) {
		case "middleTag":
			styleName = `${styles["mx-20"]}`;
			spanStyleName = "";
			break;
		case "lastTag":
			styleName = "";
			spanStyleName = `${styles["mr-2"]}`;
			break;
		default:
			styleName = "";
			spanStyleName = "";
	}

	return (
		<div className={`${styleName} ${styles.tag}`}>
			<span className={`${spanStyleName} ${styles["tag__text--em"]}`}>
				{textBold}
			</span>
			<span className={textBold ? `${styles["pl-5"]}` : styles.tag__text}>
				{text}
			</span>
		</div>
	);
};

export default Tag;
