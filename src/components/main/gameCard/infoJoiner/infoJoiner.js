const infoJoiner = (info = []) => {
	const stringInfo = [];
	info.map(({ name, platform }) => {
		return stringInfo.push(platform?.name || name);
	});

	return stringInfo.join(", ");
};

export default infoJoiner;
