import React from "react";
import Icon from "../../../common/icon/Icon";
import styles from "./PlatformList.module.css";

const PlatformList = ({ listOfPlatforms, origin }) => {
	return listOfPlatforms ? (
		<div className={styles[`${origin}__icons`]}>
			{listOfPlatforms.map((platform) => {
				return (
					<Icon
						key={platform.platform?.id}
						name={platform.platform?.name}
					/>
				);
			})}
		</div>
	) : (
		<></>
	);
};

export default PlatformList;
