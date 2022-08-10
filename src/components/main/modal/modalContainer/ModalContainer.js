import Button from "../../../common/button/Button";
import Tag from "../tag/Tag";
import InfoDetail from "../infoDetail/InfoDetail";
import styles from "./ModalContainer.module.css";
import Icon from "../../../common/icon/Icon";
import Banner from "../banner/Banner";
import Overlay from "../../../common/overlay/Overlay";
import dateReformatter from "../../../common/date/dateReformatter";
import infoJoiner from "../../gameCard/infoJoiner/infoJoiner";
import PlatformList from "../../gameCard/platformList/PlatformList";
import PropTypes from "prop-types";
import Gallery from "../gallery/Gallery";
import { DescriptionLoader } from "../../../common/loaders/descriptionLoader/DescriptionLoader";

const ModalContainer = ({ game, setModal, tooltip, setTooltip }) => {
	return (
		<>
			<Overlay clickEvent={() => setModal({ open: false, game: {} })} />
			<div className={styles.modal__container}>
				<Banner url={game?.background_image || ""} />
				<div className={styles["modal__container__header"]}>
					<div className={styles.modal__icons}>
						<PlatformList
							listOfPlatforms={game?.parent_platforms}
						/>
					</div>
					<Icon name="close" clickEvent={setModal} />
				</div>
				<h1 className={styles["modal__container__title"]}>
					{game?.name || ""}
				</h1>
				<div className={styles.container}>
					<div className={styles.modal__container__tagsContainer}>
						<Tag text={dateReformatter(game?.released, true)} />
						<Tag
							textBold="#1"
							text="TOP 2021"
							styleComp="middleTag"
						/>
						<Tag textBold="#342" text="RPG" styleComp="lastTag" />
					</div>
					<div className={styles.modal__container__buttonsContainer}>
						<Button
							name="buy"
							text="Where to"
							boldText="BUY"
							iconName="plus"
							iconPosition="right"
							width={13}
							height={13}
						/>
						<Button
							name="wish"
							text="Add to"
							boldText="WISH LIST"
							iconName="gift"
							location="modal"
							iconPosition="right"
						/>
					</div>
				</div>

				{game?.description ? (
					<div className={styles.modal__container__description}>
						{game?.description}
					</div>
				) : (

					<DescriptionLoader numOfLines={5} location="modal" />

				)}
				<div className={styles.modal__container__longButtonsContainer}>
					<Button
						name="comment"
						text="Left a comment"
						iconName="comment"
						iconPosition="right"
						origin="modal"
					/>
					<Button
						name="review"
						text="Write a review"
						iconName="plus"
						iconPosition="right"
						width={13}
						height={13}
						origin="modal"
					/>
				</div>
				<Gallery
					className={styles.modal__gallery}
					images={game?.short_screenshots}
				/>
				<div className={styles.modal__container__infoContainer}>
					<InfoDetail
						title="Platforms"
						info={infoJoiner(game?.platforms) || "Not available"}
						variant="underlined"
						tooltip={tooltip}
						setTooltip={setTooltip}
					/>
					<InfoDetail
						title="Release date"
						info={
							dateReformatter(game?.released) || "Not available"
						}
						tooltip={tooltip}
						setTooltip={setTooltip}
					/>
					<InfoDetail
						title="Publisher"
						info={game?.publishers?.[0]?.name || "Not available"}
						variant="underlined"
						tooltip={tooltip}
						setTooltip={setTooltip}
					/>
					<InfoDetail
						title="Website"
						info={game?.website || "Not available"}
						variant="underlined"
						tooltip={tooltip}
						setTooltip={setTooltip}
					/>
					<InfoDetail
						title="Genre"
						info={infoJoiner(game?.genres) || "Not available"}
						variant="underlined"
						tooltip={tooltip}
						setTooltip={setTooltip}
					/>
					<InfoDetail
						title="Developer"
						info={game?.developers?.[0]?.name || "Not available"}
						variant="underlined"
						tooltip={tooltip}
						setTooltip={setTooltip}
					/>
					<InfoDetail
						title="Age"
						info={game?.esrb_rating?.name || "Not rated"}
						tooltip={tooltip}
						setTooltip={setTooltip}
					/>
				</div>
			</div>
		</>
	);
};

ModalContainer.propTypes = {
	game: PropTypes.object,
	setModal: PropTypes.func,
};

export default ModalContainer;
