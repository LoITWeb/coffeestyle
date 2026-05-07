import React from "react";
import { Link } from "react-router-dom";
import "./Subscribe.css";
import "./SubscribeResponsive.css";

const Subscribe = () => {
	return (
		<section className="subscribe">
			<div className="container">
				<div className="subscribe-content">
					<div className="subscribe-section-block">
						<div className="subscribe-section-line"></div>
						<p className="subscribe-section-title">Sign up and get free coffee bags</p>
						<div className="subscribe-section-line"></div>
					</div>
					<h2 className="subscribe-title">Coffee Updates</h2>
					<div className="subscribe-form">
						<input type="email" placeholder="customer @coffestyle.io" className="subscribe-input" />
						<button className="subscribe-btn">Subscribe</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;  