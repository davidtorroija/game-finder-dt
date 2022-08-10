import PropTypes from "prop-types";
import ModalContainer from "./modalContainer/ModalContainer";
import styles from "./Modal.module.css";

const Modal = ({ game, setModal, setTooltip, tooltip }) => {
	return (
		<div className={styles.modal}>
			<ModalContainer
				game={game}
				setModal={setModal}
				tooltip={tooltip}
				setTooltip={setTooltip}
			/>
		</div>
	);
};

Modal.propTypes = {
	game: PropTypes.object,
	setModal: PropTypes.func,
};

export default Modal;
