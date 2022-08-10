import styles from "./Divider.module.css";

const Divider = () => {
	return (
		<div className={styles.divider}>
			<div className={styles.divider__line}></div>
			<p>or</p>
			<div className={styles.divider__line}></div>
		</div>
	);
};

export default Divider;
