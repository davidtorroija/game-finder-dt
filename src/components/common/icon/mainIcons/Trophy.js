import styles from "../../../main/navbar/navitem/Navitem.module.css";

const Trophy = () => {
    return (
        <svg
            className={styles.navbar__icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path
                className={styles.st0}
                d="M2.5.5c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5V2c1.6.3 2.7 1.8 2.5 3.4-.3 1.6-1.8 2.7-3.4 2.5h-.2c-.8 1.9-1.9 2.8-2.8 3v2.2l1.4.4c.2 0 .4.1.5.3l1.8 1.4c.2.2.3.5.1.7-.1 0-.2.1-.4.1H3c-.3 0-.5-.2-.5-.5 0-.2.1-.3.2-.4l1.8-1.4c.2-.1.3-.2.5-.3l1.4-.4v-2.2c-1-.2-2-1.1-2.8-3C2 8.3.4 7.3.1 5.6S.8 2.4 2.4 2h.2c-.1-.5-.1-1-.1-1.5zM2.6 3C1.5 3.2.8 4.3 1 5.4S2.2 7.2 3.3 7c-.3-1.1-.6-2.4-.7-4zm10.1 4c1.1.2 2.1-.5 2.3-1.6.2-1.1-.5-2.1-1.6-2.3-.1 1.5-.4 2.8-.7 3.9z"
                fill="#fff"
            />
        </svg>
    );
};

export default Trophy;
