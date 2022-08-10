import { useState, useEffect, useCallback } from "react";
import { fetchGames, fetchGameDetails } from "../../services/fetchGames";
import { useHistory } from "react-router-dom";
import HeaderContainer from "./headerContainer/HeaderContainer";
import Navbar from "./navbar/Navbar";
import CardContainer from "./cardContainer/CardContainer";
import Modal from "./modal/Modal";
import Footer from "./footer/Footer";
import CardListHeader from "./cardContainer/cardListHeader/CardListHeader";
import styles from "./Main.module.css";
import descriptionFormatter from "./descriptionFormatter/descriptionFormatter";
import Tooltip from "../common/tooltip/Tooltip";

const Main = ({ hidden = true }) => {
	const [games, setGames] = useState([]);
	const [inputText, setInputText] = useState("");
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [FetchGameDetailsStatus, setFetchGameDetailsStatus] = useState({
		hasFetchedAllGames: false,
		isFetching: false,
	});
	// eslint-disable-next-line
	const [errorStatus, setError] = useState();
	const [modal, setModal] = useState({ open: false, game: {} });
	const [search, setSearch] = useState(false);
	const [needMoreCards, setNeedMoreCards] = useState(false);
	const [page, setPage] = useState(1);
	const [display, SetDisplay] = useState(true);
	const [suggestionText, setSuggestionsText] = useState([]);
	const storedSearches = JSON.parse(localStorage.getItem("searches")) || [];
	const [lastSearches, setLastSearches] = useState(storedSearches);
	const [tooltip, setTooltip] = useState({
		open: false,
		content: "",
		positionX: "",
		positionY: "",
	});

	/* - - - - - - - - - - - - Functions - - - - - - - - - - - - */

	function loadSuggestionsWithLastSearches() {
		let newSuggestions = [];
		for (let index = 0; index < lastSearches.length; index++) {
			newSuggestions.push(lastSearches[index]);
		}
		setSuggestionsText(newSuggestions);
	}

	const updateLastSearches = useCallback(
		(lastSearch) => {
			let searchHistory = lastSearches;
			if (inputText && !searchHistory.includes(inputText)) {
				searchHistory.unshift(inputText);
			}
			if (searchHistory !== null && searchHistory.length > 3) {
				searchHistory.pop();
			}
			setLastSearches(searchHistory);
			localStorage.setItem("searches", JSON.stringify(searchHistory));
		},
		[lastSearches, inputText]
	);

	useEffect(() => {
		if (inputText !== "") {
			updateLastSearches(JSON.parse(localStorage.getItem("searches")));
		}
	}, [inputText, updateLastSearches]);

	const history = useHistory();

	const cleanWhitespaces = (str) => {
		return str.trim();
	};

	const logout = (e) => {
		e.preventDefault();
		window.sessionStorage.clear();
		history.push("/");
	};

	const suggestions = async (inputValue) => {
		if (inputValue === "") {
			loadSuggestionsWithLastSearches();
		} else {
			let { data } = await fetchGames(1, inputValue);
			setSuggestionsText([data[0]?.name, data[1]?.name, data[2]?.name]);
		}
	};

	let calledForCards = false;
	const checkScrollPosition = () => {
		const scrollY = window.scrollY;
		let screenMiddle =
			(document.documentElement.scrollHeight - window.innerHeight) / 1.75;
		setNeedMoreCards(scrollY >= screenMiddle ? true : false);
		calledForCards = false;
	};

	const onScroll = () => {
		if (!calledForCards) {
			window.requestAnimationFrame(checkScrollPosition);
			calledForCards = true;
		}
	};

	window.addEventListener("scroll", onScroll);

	const openNavbar = () => {
		setNavbarOpen((navbarOpen) => !navbarOpen);
	};

	const searched = (inputText) => {
		setInputText(inputText);
		setSearch(true);
		getGames(1, inputText);
	};

	const getGamesDetails = useCallback(
		async (modalGame) => {
			if (
				!FetchGameDetailsStatus.isFetching &&
				!FetchGameDetailsStatus.hasFetchedAllGames
			) {
				setFetchGameDetailsStatus({
					...FetchGameDetailsStatus,
					isFetching: true,
				});
				let fetchedGames = 0;
				const detailedGames = [];
				for (const game of games) {
					if (!game.description) {
						if (!modalGame || modalGame.id === game.id) {
							const { success, data, error } =
								await fetchGameDetails(game);
							if (success) {
								const gameWithDetails = {
									...game,
									description: descriptionFormatter(
										data.description
									),
									website: data.website,
									developers: data.developers,
									publishers: data.publishers,
								};
								detailedGames.push(gameWithDetails);
								fetchedGames++;
							} else {
								setError(error);
							}
						} else {
							detailedGames.push(game);
						}
					} else {
						detailedGames.push(game);
						fetchedGames++;
					}
				}
				setGames(detailedGames);
				if (!modalGame || fetchedGames === games.length) {
					setFetchGameDetailsStatus({
						hasFetchedAllGames: true,
						isFetching: false,
					});
				} else {
					setFetchGameDetailsStatus({
						...FetchGameDetailsStatus,
						isFetching: false,
					});
				}
			}
		},
		[games, FetchGameDetailsStatus]
	);

	const getGames = useCallback(
		async (pageNumber, inputText) => {
			if (!FetchGameDetailsStatus.isFetching) {
				setFetchGameDetailsStatus({
					...FetchGameDetailsStatus,
					isFetching: true,
				});
				const { success, data, error } = await fetchGames(
					pageNumber,
					inputText
				);
				if (success) {
					if (pageNumber === 1) {
						setGames([...data]);
						setPage(1);
					} else {
						setGames([...games, ...data]);
					}
					setNeedMoreCards(false);
					setPage((page) => page + 1);
				} else {
					setError(error);
				}
				setFetchGameDetailsStatus({
					hasFetchedAllGames: false,
					isFetching: false,
				});
			}
		},
		[games, FetchGameDetailsStatus]
	);

	/* - - - - - - - - - - - - Use Effects - - - - - - - - - - - - */

	useEffect(() => {
		getGames();
		loadSuggestionsWithLastSearches();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (modal.open) {
			if (
				!FetchGameDetailsStatus.hasFetchedAllGames &&
				!modal.game?.description
			) {
				getGamesDetails(modal.game);
			}
			const modalIndexGame = games.findIndex(
				(game) => game?.id === modal.game?.id
			);
			setModal((modal) => ({ ...modal, game: games[modalIndexGame] }));
			document.body.classList.add("overflow--hidden");
		} else {
			document.body.classList.remove("overflow--hidden");
		}
	}, [
		modal.open,
		modal.game,
		FetchGameDetailsStatus,
		games,
		getGamesDetails,
	]);

	useEffect(() => {
		if (needMoreCards) {
			if (search) {
				getGames(page, inputText);
			} else {
				getGames(page);
			}
			if (!display) {
				getGamesDetails(null);
			}
		}
	}, [
		needMoreCards,
		inputText,
		page,
		search,
		display,
		getGamesDetails,
		getGames,
	]);

	/*--------------------------------------------------------------------------------*/

	return (
		<main
			className={
				hidden
					? styles["main__container--hiden"]
					: styles.main__container
			}
		>
			<div className={styles.container__header}>
				<HeaderContainer
					openNavbar={openNavbar}
					open={navbarOpen}
					searched={searched}
					logout={logout}
					suggestions={suggestions}
					suggestionText={suggestionText}
				/>
			</div>
			<div
				className={
					!modal.open
						? "container__cards"
						: "container__cards container__cards--modal-open"
				}
			>
				<Navbar
					openNavbar={openNavbar}
					open={navbarOpen}
					logout={logout}
				/>
				<CardListHeader
					clickEvent={() => SetDisplay(!display)}
					display={display}
					getGameDetails={() => getGamesDetails(null)}
					header={cleanWhitespaces(inputText)}
				/>

				<CardContainer
					eventClick={setModal}
					games={games}
					display={display}
					setTooltip={setTooltip}
					tooltip={tooltip}
				/>
			</div>

			{modal.open && (
				<Modal
					setModal={setModal}
					game={modal.game}
					setTooltip={setTooltip}
					tooltip={tooltip}
				/>
			)}
			<Footer />
			{tooltip.open && (
				<Tooltip
					content={tooltip.content}
					positionX={tooltip.positionX}
					positionY={tooltip.positionY}
				/>
			)}
		</main>
	);
};

export default Main;
