import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import "./HeroResponsive.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="big-container">
				<div className="hero-content">
					<p className="hero-top-text">Best place to buy design</p>
					<h1 className="hero-title">Coffee Mugs</h1>
					<p className="hero-sub-text">
						The most versatile furniture system ever created. Designed to fit your life, made to move and grow.
					</p>
					<a href="#products" className="hero-link">Explore Our Products</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;  