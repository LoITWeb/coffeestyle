import React from "react";
import { Link } from "react-router-dom";
import useMobileNav from "../../../hooks/useMobileNav";
import logo from "./images/logo.png";
import basket from "./images/basket.png";
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
								<Link className="nav-link" to="/Products">Our Products</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Blog">Blog</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/About">About</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Contact">Contact</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Styleguide">Styleguide</Link>
							</li>
						</ul>

						<div className="nav__icon">
							<button className="mobile-nav-btn" onClick={toggleNav}>
								<div className={`nav-icon ${isOpen ? 'nav-icon--active' : ''}`}></div>
							</button>
						</div>

					</nav>
					<div className="nav-basket">
						<Link className="basket-link" to="#!">
							<img src={basket} alt="Basket" className="basket-img" />
						</Link>
						<Link className="cart-link" to="#!">CART</Link>
						<p className="basket-num">0</p>
					</div>
				</div>
			</div>

			<div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
				<ul className="mobile-nav__list">
					<li><Link className="mobile-nav-link" to="/" onClick={handleLinkClick}>Home</Link></li>
					<li><Link className="mobile-nav-link" to="/Products" onClick={handleLinkClick}>Our Products</Link></li>
					<li><Link className="mobile-nav-link" to="/Blog" onClick={handleLinkClick}>Blog</Link></li>
					<li><Link className="mobile-nav-link" to="/About" onClick={handleLinkClick}>About</Link></li>
					<li><Link className="mobile-nav-link" to="/Contact" onClick={handleLinkClick}>Contact</Link></li>
					<li><Link className="mobile-nav-link" to="/Styleguide" onClick={handleLinkClick}>Styleguide</Link></li>
				</ul>
				<div className="mobile-nav-basket">
					<Link className="mobile-basket-link" to="#!">
						<img src={basket} alt="Basket" className="basket-img" />
					</Link>
					<Link className="mobile-cart-link" to="#!">CART</Link>
					<p className="mobile-basket-num">12</p>
				</div>
			</div>
		</header>
	);
};

export default Header;                                     