import styles from "./Platforms.module.css";

const Mac = ({ fill = "white", width, height }) => {
	return (
		<svg
			className={styles.platform__icon}
			id="mac"
			fill={fill}
			viewBox="0 0 900 1000"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z" />
		</svg>
	);
};

export default Mac;