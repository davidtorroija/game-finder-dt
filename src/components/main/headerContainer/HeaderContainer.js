import { useState, useEffect } from "react";
import Headline from "../../common/headline/Headline";
import Icon from "../../common/icon/Icon";
import profilePicture from "../../../assets/images/profilePicture.png";
import Link from "../../loginPage/link/Link";
import styles from "./HeaderContainer.module.css";
import "../../../index.css";

const HeaderContainer = ({
	openNavbar,
	open,
	searched,
	logout,
	suggestions,
	suggestionText,
}) => {
	const [showSearchInput, setShowSearchInput] = useState(false);
	const [search, setSearch] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(true);
	const [headerStyles, setHeaderStyles] = useState("");
	const [searchInputStyles, setSearchInputStyles] = useState("");
	const [wrapperContainer, setWrapperContainerStyles] = useState("");
	const [suggestionWrapper, setSuggestionWrapper] = useState("");

	function checkUsingMobile() {
		window.addEventListener(
			"resize",
			() => {
				if (window.innerWidth > 768) {
					setShowSearchInput(false);
					setShowSuggestions(false);
				}
			},
			showSearchInput
		);
	}

	useEffect(() => {
		setShowSuggestions(false);
	}, []);

	const suggestionClickEvent = (event) => {
		searched(event.target.innerHTML);
		setShowSuggestions(false);
		setShowSearchInput(false);
	};

	const inputOnChange = (event) => {
		setSearch(event.target.value);
		suggestions(event.target.value);
	};

	const clickEvent = () => {
		if (showSearchInput) {
			searchGameOrConsole();
		}

		setShowSearchInput((showSearchInput) => !showSearchInput);
		setShowSuggestions(false);
	};

	const openInput = () => {
		setShowSuggestions(true);
	};

	if (showSearchInput) {
		checkUsingMobile();
	}

	useEffect(() => {
		if (showSearchInput) {
			setHeaderStyles(styles["header--mobileSearchShowing"]);
			setSearchInputStyles(
				styles["searchWrapper__input--mobileSearchShowing"]
			);
		} else {
			setHeaderStyles(styles.searchWrapper__input);
			setSearchInputStyles(styles["searchWrapper__input"]);
		}
	}, [showSearchInput]);

	useEffect(() => {
		if (!showSuggestions) {
			setSuggestionWrapper(styles["suggestionWrapper--hidden"]);
		} else {
			setSuggestionWrapper(styles.suggestionWrapper);
		}
	}, [search, showSuggestions]);

	useEffect(() => {
		if (showSuggestions) {
			setWrapperContainerStyles(
				`${styles.searchWrapper} ${styles["searchWrapper--open"]}`
			);
		} else {
			setWrapperContainerStyles(styles.searchWrapper);
		}
	}, [showSuggestions]);

	function searchGameOrConsole() {
		searched(search);
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			searchGameOrConsole();
			document.activeElement.blur();
			if (checkUsingMobile) {
				setShowSearchInput(false);
				setShowSuggestions(false);
			}
		}
	};

	return (
		<header className={headerStyles}>
			<div className={styles.headerContainer}>
				<div className={styles.headerContainer__headerOptions}>
					<div className={styles.headerOptions__hamburgerMenu}>
						<Icon name="burger" clickEvent={openNavbar} />
					</div>
					<div
						className={
							styles["headerOptions__searchIcon--mobileView"]
						}
					>
						<Icon name="search" clickEvent={clickEvent} />
					</div>
					<div className={styles.headerOptions__title}>
						<Headline title="GAME" bold="FINDER" />
					</div>
					<div className={wrapperContainer}>
						<div className={styles.searchWrapper__icon}>
							<Icon
								name="search"
								location="header"
								clickEvent={() => {
									searchGameOrConsole();
								}}
							/>
						</div>
						<div className={searchInputStyles}>
							<input
								type="text"
								placeholder="Type game name or console"
								onKeyDown={handleKeyDown}
								onChange={(e) => {
									inputOnChange(e);
								}}
								onClick={(e) => {
									openInput(e.target.value);
									suggestions(e.target.value);
									setShowSuggestions(true);
								}}
								onBlur={(e) => {
									setTimeout(() => {
										setShowSuggestions(false);
									}, 300);
								}}
							/>
							<div className={suggestionWrapper}>
								{suggestionText ? (
									<>
										<p
											className={styles.suggestion}
											onClick={(e) => {
												suggestionClickEvent(e);
											}}
										>
											{suggestionText[0] || "No matches"}
										</p>
										<p
											className={styles.suggestion}
											onClick={(e) => {
												suggestionClickEvent(e);
											}}
										>
											{suggestionText[1]}
										</p>
										<p
											className={styles.suggestion}
											onClick={(e) => {
												suggestionClickEvent(e);
											}}
										>
											{suggestionText[2]}
										</p>
									</>
								) : null}
							</div>
						</div>
					</div>
					<div
						className={
							styles.headerOptions__logOutAndProfilePicture
						}
					>
						<div className={styles.headerOptions__logOutWrapper}>
							<div className={styles.logOutWrapper__hyperlink}>
								<Link
									className={styles.hyperlink}
									href="/"
									title="Logout"
									eventClick={logout}
								/>
							</div>
							<div
								className={styles.logOutWrapper__icon}
								onClick={logout}
							>
								<Icon name="logout" />
							</div>
						</div>
						<div className={styles.headerOptions__profilePicture}>
							<img src={profilePicture} alt="Profile"></img>
						</div>
					</div>
				</div>
				<div className={styles.headerContainer__headerDividerLine}>
					<hr></hr>
				</div>
			</div>
		</header>
	);
};

export default HeaderContainer;
