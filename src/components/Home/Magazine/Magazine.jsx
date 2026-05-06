import React from "react";
import { Link } from "react-router-dom";
import magazine_1 from "./images/magazine-1.webp";
import magazine_2 from "./images/magazine-2.webp";
import magazine_3 from "./images/magazine-3.webp";
import "./Magazine.css";
import "./MagazineResponsive.css";

const Magazine = () => {
	return (
		<section className="magazine">
			<div className="container">
				<div className="magazine-content">
					<div className="section-block">
						<div className="section-line"></div>
						<p className="section-title">Buy 2 mugs and get a coffee magazine free</p>
						<div className="section-line"></div>
					</div>
					<div className="magazine-block">
						<div className="magazine-grid">
							<img src={magazine_1} alt="Magazine" className="magazine-img-1" />
							<img src={magazine_2} alt="Magazine" className="magazine-img-2" />
							<img src={magazine_3} alt="Magazine" className="magazine-img-3" />
						</div>
						<div className="magazine-block-content">
							<p className="magazine-top-text">Premium Offer</p>
							<h2 className="magazine-title">Get our Coffee Magazine</h2>
							<p className="magazine-sub-text">
								The most versatile furniture system ever created. Designed to fit your life.
							</p>
							<Link className="magazine-btn" to="#!">Start Shopping</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Magazine;  