import React from "react";
import { Link } from "react-router-dom";
import "./Top.css";
import "./TopResponsive.css";

const Top = () => {
	return (
		<section className="top">
			<div className="container">
				<div className="top-content">
					<p className="top-title">Even the all-powerful Pointing has no control about the blind texts.</p>
					<p className="top-text">
						It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
					</p>
					<a href="#stories" className="top-link">Read the full Story</a>
				</div>
			</div>
		</section>
	);
};

export default Top;  