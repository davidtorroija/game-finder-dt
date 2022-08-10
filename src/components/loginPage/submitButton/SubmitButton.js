import styles from "./SubmitButton.module.css";

const SubmitButton = ({ type, value }) => {
	return (
		<input
			type={type === "submit" ? "submit" : "button"}
			className={type === "submit" && styles["submit__button"]}
			value={value}
		/>
	);
};

export default SubmitButton;
