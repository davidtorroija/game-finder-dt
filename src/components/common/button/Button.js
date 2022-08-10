import PropTypes from "prop-types";
import Icon from "../icon/Icon";
import styles from "./Button.module.css";

const Button = ({
	name,
	text,
	boldText = "",
	iconName,
	iconPosition = "",
	location,
	height,
	width,
	origin=""
}) => {
	let styleName;

	switch (name) {
		case "buy":
			styleName = `${styles.btn} ${styles["btn--buy"]}`;
			break;
		case "wish":
			styleName = `${styles.btn} ${styles["btn--green"]} ${styles["btn--wish"]}`;
			break;
		case "comment":
			styleName = `${styles["btn--comment"]} ${styles["btn--grey"]} ${styles["btn--long"]}`;
			break;
		case "review":
			styleName = `${styles["btn--grey"]} ${styles["btn--long"]}`;
			break;
		case "youtube":
			styleName = `${styles["btn--youtube"]}`;
			break;
		default:
			styleName = "";
	}

	return (
		<button className={`${styles.btn} ${styleName}`}>
			{iconPosition === "left" && (
				<Icon name={iconName} location={location} origin={origin} />
			)}
			<div className={styles.textContainer}>
				<span
					className={
						name !== "youtube"
							? styles["--small"]
							: styles["--extra-small"]
					}
				>
					{text}
				</span>
				<span className={styles["--bold"]}>{boldText}</span>
			</div>
			{iconPosition === "right" && (
				<Icon
					name={iconName}
					location={location}
					height={height}
					width={width}
					origin={origin}
				/>
			)}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	boldText: PropTypes.string,
	iconName: PropTypes.string,
	iconClassName: PropTypes.string,
	iconPosition: PropTypes.string,
};

export default Button;
