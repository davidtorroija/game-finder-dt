import styles from "./Input.module.css";

const Input = ({ type, placeholder, value, onChange, error }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={
				error
					? styles["formfield__field--error"]
					: styles.formfield__field
			}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
