function ServiceResponse({ success, data, error }) {
	return {
		success,
		data: data?.results || data,
		error,
	};
}

export default ServiceResponse;
