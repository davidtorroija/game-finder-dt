import PropTypes from "prop-types";
import styles from "./InfoDetail.module.css";
import showTooltip from "../../../common/tooltip/showTooltip";
import hideTooltip from "../../../common/tooltip/hideTooltip";

const InfoDetail = ({ title, info, type, variant, tooltip, setTooltip }) => {
	const openTooltip = (e) => showTooltip(e, tooltip, setTooltip);
	const closeTooltip = () => hideTooltip(tooltip, setTooltip);
	const showInfo = (type, info, variant) => {
		if (type === "link") {
			return (
				<a
					href={info}
					className={
						variant === "underlined"
							? `${styles["--underlined"]} ${styles.info__content}`
							: styles.info__content
					}
					onMouseOver={openTooltip}
					onMouseOut={closeTooltip}
				>
					{info}
				</a>
			);
		} else {
			return (
				<div
					className={
						variant === "underlined"
							? `${styles["--underlined"]} ${styles.info__content}`
							: styles.info__content
					}
					onMouseOver={openTooltip}
					onMouseOut={closeTooltip}
				>
					{info}
				</div>
			);
		}
	};
	return (
		<div className={styles.info}>
			<h2 className={styles.info__title}>{title}</h2>
			{showInfo(type, info, variant)}
		</div>
	);
};

InfoDetail.propTypes = {
	title: PropTypes.string,
	info: PropTypes.string,
	variant: PropTypes.string,
};

export default InfoDetail;
