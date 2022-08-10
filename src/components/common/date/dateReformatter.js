const dateReformatter = (stringDate, plainDate) => {
	const myDate = new Date(stringDate);

	const day = myDate.getUTCDate();
	const month = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	][myDate.getMonth()];
	const year = myDate.getFullYear();

	if (stringDate) {
		return `${month} ${day}${plainDate ? ` ${year}` : `, ${year}`}`;
	} else {
		return "Not Defined";
	}
};

export default dateReformatter;
