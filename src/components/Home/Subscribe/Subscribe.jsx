import React from "react";
import { Link } from "react-router-dom";
import "./Subscribe.css";
import "./SubscribeResponsive.css";

const Subscribe = () => {
	return (
		<section className="subscribe">
			<div className="subscribe-content">
				<div className="section-block subscribe">
					<div className="section-line subscribe"></div>
					<p className="section-title subscribe">Sign up and get free coffee bags</p>
					<div className="section-line subscribe"></div>
				</div>
				<h2 className="subscribe-title">Coffee Updates</h2>
				<div className="subscribe-form">
					<input type="email" placeholder="customer @coffestyle.io" className="subscribe-input" />
					<button className="subscribe-btn">Subscribe</button>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;  