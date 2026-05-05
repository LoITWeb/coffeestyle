import React from "react";
import { Link } from "react-router-dom";
import featured_1 from "./images/featured-1.webp";
import featured_2 from "./images/featured-2.webp";
import "./Featured.css";
import "./FeaturedResponsive.css";

const Featured = () => {
	return (
		<section className="featured">
			<div className="container">
				<div className="featured-content">
					<div className="featured-title-block">
						<div className="featured-line"></div>
						<p className="featured-title">Featured Mugs</p>
						<div className="featured-line"></div>
					</div>
					<div className="featured-block">
						<div className="featured-card">
							<img src={featured_1} alt="Photo" className="featured-img" />
							<Link className="featured-link" to="#!">
								<p className="featured-text">Pink Premium Ceramic</p>
								<p className="featured-price">$ 99.00 USD</p>
							</Link>
						</div>
						<div className="featured-card">
							<img src={featured_2} alt="Photo" className="featured-img" />
							<Link className="featured-link" to="#!">
								<p className="featured-text">Golden Designers Mug</p>
								<div className="featured-price-block">
									<p className="featured-price-2">$50.00</p>
									<p className="features-price-no">$69.00 USD</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;  