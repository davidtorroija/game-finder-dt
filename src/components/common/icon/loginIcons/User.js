import styles from "./InputIcons.module.css";

const User = ({ error }) => {
	return (
		<svg
			className={
				error ? styles["input__icon--error"] : styles.input__icon
			}
			width="25"
			height="20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M13.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm10-8.75a8.75 8.75 0 00-6.835 14.213C4.053 14.033 6.006 12.5 10 12.5c3.994 0 5.946 1.531 6.835 2.963A8.75 8.75 0 0010 1.25z"
			/>
		</svg>
	);
};
export default User;
