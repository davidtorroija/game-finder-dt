import {descriptionRegex} from "../../../utils/regex";

const descriptionFormatter = (description = "No description") => {
	return description.replace(
		descriptionRegex,
		""
	);
};

export default descriptionFormatter;
