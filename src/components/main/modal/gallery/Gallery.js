import PropTypes from "prop-types";

import ImageOverlay from "./imageOverlay/ImageOverlay";
import Button from "../../../common/button/Button";
import styles from "./Gallery.module.css";

const Gallery = ({ images, className }) => {
	const screenshots = images?.slice(1, 6);

	return (
		<div className={`${styles.gallery} ${className}`}>
			{screenshots.map((image, imgIndex, screenshots) => {
				let photo;
				if (screenshots.length !== 1) {
					if (imgIndex === 0) {
						photo = (
							<div
								key={image.id}
								className={styles["gallery__img--first"]}
							>
								<img
									className={styles.gallery__img}
									src={image.image}
									alt={`game video preview`}
								/>
								<Button
									name="youtube"
									text="Play full video"
									iconPosition="left"
									iconName="youtube"
								/>
							</div>
						);
					} else if (imgIndex === screenshots.length - 1) {
						photo = (
							<div
								key={image.id}
								className={styles["gallery__img--last"]}
							>
								<img
									className={styles.gallery__img}
									src={image.image}
									alt={`game screenshot ${imgIndex}`}
								/>
								<ImageOverlay />
							</div>
						);
					} else {
						photo = (
							<img
								key={image.id}
								className={styles.gallery__img}
								src={image.image}
								alt={`game screenshot ${imgIndex}`}
							/>
						);
					}
				} else {
					photo = (
						<div
							key={image.id}
							className={styles["gallery__img--first"]}
						>
							<img
								className={styles.gallery__img}
								src={image.image}
								alt={`game video preview`}
							/>
						</div>
					);
				}
				return photo;
			})}
		</div>
	);
};

Gallery.propTypes = {
	images: PropTypes.array,
	className: PropTypes.string,
};

export default Gallery;
