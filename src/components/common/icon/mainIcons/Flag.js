import styles from "../../../main/navbar/navitem/Navitem.module.css";

const Flag = () => {
	return (
		<svg
			className={styles.navbar__icon}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
		>
			<path
				className={styles.st0}
				d="M14.8.1c.1.1.2.2.2.4V8c0 .2-.1.4-.3.5l-.2-.5.2.5c-.1.1-.3.1-.4.1-.3.1-.6.2-1 .4-.8.3-1.9.5-2.7.5-.9 0-1.6-.3-2.3-.5-.6-.3-1.2-.5-1.8-.5-.7 0-1.6.2-2.4.5-.4.1-.7.2-1.1.3v6.2c0 .3-.2.5-.5.5s-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v.3c.2-.1.5-.2.8-.3C4.6.3 5.7 0 6.5 0c.8 0 1.5.3 2.1.5.7.3 1.2.5 1.9.5s1.6-.2 2.4-.5c.5-.1.9-.3 1.3-.5"
				fill="#fff"
			/>
		</svg>
	);
};

export default Flag;
