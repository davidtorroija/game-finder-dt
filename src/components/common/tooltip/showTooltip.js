const showTooltip = (e, tooltip, setTooltip) => {
	!tooltip.open &&
	setTooltip({
		open: true,
		content: e.target.innerText,
		positionX: `${
			window.scrollX + e.target.getBoundingClientRect().left
		}px`,
		positionY: `${
			window.scrollY + e.target.getBoundingClientRect().bottom + 7
		}px`,
	});
};

export default showTooltip;
