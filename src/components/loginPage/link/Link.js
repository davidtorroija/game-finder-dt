import styles from "./Link.module.css";

const Link = ({ title, href, eventClick }) => {
	return (
		<a className={styles.form__anchors} href={href} onClick={eventClick}>
			{title}
		</a>
	);
};

export default Link;
