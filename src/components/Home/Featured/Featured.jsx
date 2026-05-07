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
					<div className="section-block">
						<div className="section-line"></div>
						<p className="section-title">Featured Mugs</p>
						<div className="section-line"></div>
					</div>
					<div className="featured-block">
						<div className="card">
							<Link className="card-link" to="#!">
							<img src={featured_1} alt="Photo" className="card-img" />
								<p className="card-text">Pink Premium Ceramic</p>
								<div className="card-price-block">
									<p className="card-price-red"></p>
									<p className="card-price">$ 99.00 USD</p>
									<p className="card-price-line"></p>
								</div>
							</Link>
						</div>
						<div className="card">
							<Link className="card-link" to="#!">
							<img src={featured_2} alt="Photo" className="card-img" />
								<p className="card-text">Golden Designers Mug</p>
								<div className="card-price-block">
									<p className="card-price-red">$50.00</p>
									<p className="card-price"></p>
									<p className="card-price-line">$ 69.00 USD</p>
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