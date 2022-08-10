import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const Banner = ({ url = "" }) => {
	return (
		<div
			className={styles.banner}
			style={{ backgroundImage: `url(${url})` }}
		>
			<div className={styles.overlay}></div>
		</div>
	);
};

Banner.propTypes = {
	url: PropTypes.string,
};

export default Banner;
