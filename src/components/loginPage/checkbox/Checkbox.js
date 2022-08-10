import styles from "./Checkbox.module.css";

const Checkbox = () => {
	return (
		<div className={styles.checkbox}>
			<input
				type="checkbox"
				className={styles.checkbox__input}
				id="checkbox__input"
			/>
			<label className={styles.checkbox__label} htmlFor="checkbox__input">
				Remember me
			</label>
		</div>
	);
};

export default Checkbox;
