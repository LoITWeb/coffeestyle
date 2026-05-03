import React from "react";
import { Link } from "react-router-dom";
import useMobileNav from "../../../hooks/useMobileNav";
import logo from "./images/logo.png";
import "./Header.css";
import "./HeaderResponsive.css";

const Header = () => {
	const { isOpen, toggleNav } = useMobileNav();

	const handleLinkClick = () => {
		toggleNav();
	};

	return (
		<header className="header">
			<div className="container">
				<div className="nav-menu">
					<Link className="link-logo" to="/">
						<img src={logo} alt="Logo" className="logo-img" />
					</Link>
					<nav className="nav">
						<ul className="nav-list">
							<li className="nav-item">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Page_1">Page-1</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Page_2">Page-2</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Page_3">Page-3</Link>
							</li>
						</ul>

						<div className="nav__icon">
							<button className="mobile-nav-btn" onClick={toggleNav}>
								<div className={`nav-icon ${isOpen ? 'nav-icon--active' : ''}`}></div>
							</button>
						</div>

					</nav>
				</div>
			</div>

			<div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
				<ul className="mobile-nav__list">
					<li><Link className="mobile-nav-link" to="/" onClick={handleLinkClick}>Home</Link></li>
					<li><Link className="mobile-nav-link" to="/Page_1" onClick={handleLinkClick}>Page-1</Link></li>
					<li><Link className="mobile-nav-link" to="/Page_2" onClick={handleLinkClick}>Page-2</Link></li>
					<li><Link className="mobile-nav-link" to="/Page_3" onClick={handleLinkClick}>Page-3</Link></li>
				</ul>
			</div>
		</header>
	);
};

export default Header;                                     