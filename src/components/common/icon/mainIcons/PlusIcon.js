import styles from "./ModalIcons.module.css";
const PlusIcon = ({ fill = "white", width, height, origin }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 7 7`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={origin === 'modal'? `${styles.btn__icon} ${styles.modal__plus}` : `${styles.btn__icon}`}
        >
            <path
                d="M2.7832 4.41406H0.515625V3.13086H2.7832V0.845703H4.06641V3.13086H6.33398V4.41406H4.06641V6.66992H2.7832V4.41406Z"
                fill={fill}
            />
        </svg>
    );
};

export default PlusIcon;
