import Headline from "../../common/headline/Headline";
import Navitem from "./navitem/Navitem";
import Icon from "../../common/icon/Icon";
import Overlay from "../../common/overlay/Overlay";
import styles from "./Navbar.module.css";

const Navbar = ({ openNavbar, open, logout }) => {
	return (
		<>
			{open && <Overlay clickEvent={openNavbar} location="navbar" />}
			<nav className={open ? styles["navbar--opened"] : styles.navbar}>
				<div className={styles.navitems__container}>
					<div className={styles.navitems__header}>
						<button>
							<Headline
								title="GAME"
								bold="FINDER"
								location="navbar"
							/>
						</button>
						<Icon
							name="burger"
							location="navbar"
							clickEvent={openNavbar}
						/>
					</div>
					<ul>
						<Navitem
							bold={true}
							anchorText="Home"
							anchorHref=""
							activeLink={true}
						/>
						<Navitem
							bold={true}
							anchorText="Review"
							anchorHref=""
						/>
						<Navitem
							bold={true}
							anchorText="New Releases"
							anchorHref=""
						/>
					</ul>
					<ul>
						<Navitem
							anchorText="This week"
							anchorHref=""
							iconName="star"
						/>
						<Navitem
							anchorText="This month"
							anchorHref=""
							iconName="calendar"
						/>
						<Navitem
							anchorText="Coming soon"
							anchorHref=""
							iconName="flag"
						/>
					</ul>
					<ul>
						<Navitem
							bold={true}
							anchorText="Popular"
							anchorHref=""
						/>
					</ul>
					<ul>
						<Navitem
							anchorText="Last searches"
							anchorHref=""
							iconName="search"
						/>
						<Navitem
							anchorText="Best of the year"
							anchorHref=""
							iconName="trophy"
						/>
					</ul>
					<ul className={styles.navitems__footer}>
						<Navitem
							anchorText="Logout"
							anchorHref="/"
							iconName="logout"
							eventClick={logout}
						/>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
