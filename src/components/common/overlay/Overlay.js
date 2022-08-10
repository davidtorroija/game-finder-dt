import styles from "./Overlay.module.css";

const Overlay = ({ location, clickEvent }) => {
	return (
		<div onClick={clickEvent}>
			<div
				className={
					location === "navbar"
						? styles.navbar__overlay
						: styles.modal__container__overlay
				}
			></div>
		</div>
	);
};

export default Overlay;
