import { emailRegex as regex } from "../../../utils/regex";

const emailRegex = (email) => {
	let validEmail = regex.test(email);

	return validEmail;
};

export default emailRegex;
