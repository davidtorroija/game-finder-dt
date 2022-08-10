import styles from "../../../main/navbar/navitem/Navitem.module.css";

const Calendar = () => {
	return (
		<svg
			className={styles.navbar__icon}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
		>
			<path
				className={styles.st0}
				d="M3.5 0c.3 0 .5.2.5.5V1h8V.5c0-.3.2-.5.5-.5s.5.2.5.5V1h1c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5h16V4H0V3c0-1.1.9-2 2-2h1V.5c0-.3.2-.5.5-.5z"
				fill="#fff"
			/>
		</svg>
	);
};

export default Calendar;
