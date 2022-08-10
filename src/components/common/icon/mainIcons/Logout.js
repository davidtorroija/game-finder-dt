import styles from "../../../main/navbar/navitem/Navitem.module.css";

const Logout = () => {
	return (
		<svg
			className={styles.navbar__icon}
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			viewBox="0 0 16 16"
			fill="#fff"
		>
			<path
				className={styles.st0}
				d="M10 12.5c0 .3-.2.5-.5.5h-8c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.8-.7-1.5-1.5-1.5h-8C.7 2 0 2.7 0 3.5v9c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5v-2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2z"
			/>
			<path
				className={styles.st0}
				d="M15.9 8.4c.2-.2.2-.5 0-.7l-3-3c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l2.1 2.1H5.5c-.3 0-.5.2-.5.5s.2.5.5.5h8.8l-2.1 2.1c-.2.2-.2.5 0 .7s.5.2.7 0l3-2.9z"
			/>
		</svg>
	);
};

export default Logout;
