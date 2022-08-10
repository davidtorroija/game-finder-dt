import PropTypes from "prop-types";
import styles from "./Tooltip.module.css";


const Tooltip = ({content, positionX, positionY}) => {
    return (
        <div className={styles.infoTooltipText} style={{transform: `translate(${positionX}, ${positionY})`}}>
            {content}
        </div>
    )
}


Tooltip.propTypes = {
    content: PropTypes.string,
    positionX: PropTypes.string,
    positionY: PropTypes.string
  };

export default Tooltip
