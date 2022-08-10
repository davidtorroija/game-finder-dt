import styles from "../../../main/navbar/navitem/Navitem.module.css";

const Star = () => {
    return (
        <svg
            className={styles.navbar__icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path
                className={styles.st0}
                d="M3.6 15.4c-.4.2-.8-.1-.7-.6l.8-4.7L.2 6.8c-.4-.3-.2-.9.3-1l4.9-.7L7.6.8c.2-.4.7-.4.9 0l2.2 4.3 4.9.7c.4.1.6.6.3.9l-3.5 3.4.8 4.7c.1.4-.4.8-.7.6L8 13.2l-4.4 2.2z"
                fill="#fff"
            />
        </svg>
    );
};

export default Star;
