import ServiceResponse from "./serviceResponse";

export const fetchGames = async (page = 1, inputValue = "") => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_BASE_URL}?key=${process.env.REACT_APP_API_KEY}&page=${page}&search=${inputValue}`
		);
		if (response.ok) {
			const success = response.ok;
			const data = await response.json();
			return ServiceResponse({ success, data });
		} else {
			throw new Error(response.status);
		}
	} catch (error) {
		return ServiceResponse({ error });
	}
};

export const fetchGameDetails = async (game) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_BASE_URL}/${game.id}?key=${process.env.REACT_APP_API_KEY}`
		);
		if (response.ok) {
			const success = response.ok;
			const data = await response.json();
			return ServiceResponse({ success, data });
		} else {
			throw new Error(response.status);
		}
	} catch (error) {
		return ServiceResponse({ error });
	}
};
