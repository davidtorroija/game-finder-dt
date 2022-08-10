import styles from "./Error.module.css";

const Error = ({ text }) => {
	return <span className={styles.formfield__span}>{text}</span>;
};

export default Error;
