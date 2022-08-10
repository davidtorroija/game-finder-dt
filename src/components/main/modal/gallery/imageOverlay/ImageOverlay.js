import styles from "./ImageOverlay.module.css";

const ImageOverlay = () => {
	return (
		<>
			<div className={styles.imgOverlay}></div>
			<div className={styles.imgOverlay__textContainer}>
				<span>View all</span>
				<span>...</span>
			</div>
		</>
	);
};

export default ImageOverlay;
