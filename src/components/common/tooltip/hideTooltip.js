const hideTooltip = (tooltip, setTooltip) => {
	tooltip.open &&
		setTooltip({
			open: false,
			content: "",
			positionX: "",
			positionY: "",
		});
};

export default hideTooltip;
