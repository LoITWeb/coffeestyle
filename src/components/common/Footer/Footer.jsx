import React from "react";
import { Link } from "react-router-dom";
import footer_logo from "./images/footer-logo.png";
import "./Footer.css";
import "./FooterResponsive.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-style">
						<div className="footer-block">
							<Link className="footer-logo" to="/">
								<img src={footer_logo} alt="Logo" className="footer-logo-img" />
							</Link>
							<p className="footer-text">
								Delivering the best coffee life since 1996. From coffee geeks to the real ones.
							</p>
						</div>
						<div className="copyright">CoffeeStyle Inc. © 1996</div>
					</div>
					<div className="footer-menu">
						<p className="footer-title">Menu</p>
						<Link className="footer-link" to="/">Home</Link>
						<Link className="footer-link" to="/Products">Our Products</Link>
						<Link className="footer-link" to="/About">About</Link>
						<Link className="footer-link" to="/Contact">Contact</Link>
						<Link className="footer-link" to="/Styleguide">Styleguide</Link>
					</div>
					<div className="footer-follow">
						<p className="footer-title">Follow Us</p>
						<a href="#!" className="footer-link">Facebook</a>
						<a href="#!" className="footer-link">Instagram</a>
						<a href="#!" className="footer-link">Pinterest</a>
						<a href="#!" className="footer-link">Twitter</a>
					</div>
					<div className="footer-contact">
						<div className="footer-block">
							<p className="footer-title contact">Contact Us</p>
							<Link className="footer-link" to="#!">We’re Always Happy to Help<br /></Link>
							<a href="mailto:example@example.com" className="footer-mail" target="_blank" rel="noopener noreferrer">
								us@coffeestyle.io
							</a>
						</div>
						<div className="copyright">Powered by Webflow</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;                                                                        