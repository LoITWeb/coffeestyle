import React from "react";
import { Link } from "react-router-dom";
import product_1 from "./images/product-1.webp";
import product_2 from "./images/product-2.webp";
import product_3 from "./images/product-3.webp";
import product_4 from "./images/product-4.webp";
import product_5 from "./images/product-5.webp";
import product_6 from "./images/product-6.webp";
import product_7 from "./images/product-7.webp";
import product_8 from "./images/product-8.webp";
import product_9 from "./images/product-9.webp";
import "./Products.css";
import "./ProductsResponsive.css";

const Products = () => {
	return (
		<section id="products" className="products">
			<div className="container">
				<div className="products-content">
					<div className="section-block">
						<div className="section-line"></div>
						<p className="section-title">More Products</p>
						<div className="section-line"></div>
					</div>
					<div className="products-block">
						<div className="card">
							<img src={product_1} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">Red Love Cup</p>
								<div className="card-price-block">
									<p className="card-price-red">$25.00</p>
									<p className="card-price"></p>
									<p className="card-price-line">$ 37.00 USD</p>
								</div>
							</Link>
						</div>
						<div className="card">
							<img src={product_2} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">Black Tea Cup</p>
								<div className="card-price-block">
									<p className="card-price-red">$15.00</p>
									<p className="card-price"></p>
									<p className="card-price-line">$ 29.00 USD</p>
								</div>
							</Link>
						</div>
						<div className="card">
							<img src={product_3} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">B&W Essentials Mug</p>
								<div className="card-price-block">
									<p className="card-price-red"></p>
									<p className="card-price">$ 19.00 USD</p>
									<p className="card-price-line"></p>
								</div>
							</Link>
						</div>
						<div className="card">
							<img src={product_4} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">Winter Style Mug</p>
								<div className="card-price-block">
									<p className="card-price-red"></p>
									<p className="card-price">$ 25.00 USD</p>
									<p className="card-price-line"></p>
								</div>
							</Link>
						</div>
						<div className="card">
							<img src={product_5} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">Ceramic Tea</p>
								<div className="card-price-block">
									<p className="card-price-red"></p>
									<p className="card-price">$ 46.00 USD</p>
									<p className="card-price-line"></p>
								</div>
							</Link>
						</div>
						<div className="card">
							<img src={product_6} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">No Handle Bar Cup</p>
								<div className="card-price-block">
									<p className="card-price-red"></p>
									<p className="card-price">$ 34.00 USD</p>
									<p className="card-price-line"></p>
								</div>
							</Link>
						</div>
						<div className="card">
							<img src={product_7} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">Espresso Cup by Mugs.co</p>
								<div className="card-price-block">
									<p className="card-price-red"></p>
									<p className="card-price">$ 25.00 USD</p>
									<p className="card-price-line"></p>
								</div>
							</Link>
						</div>
						<div className="card">
							<img src={product_8} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">Pink Premium Ceramic</p>
								<div className="card-price-block">
									<p className="card-price-red"></p>
									<p className="card-price">$ 99.00 USD</p>
									<p className="card-price-line"></p>
								</div>
							</Link>
						</div>
						<div className="card">
							<img src={product_9} alt="Photo" className="card-img" />
							<Link className="card-link" to="#!">
								<p className="card-text">Summer Designer Cup</p>
								<div className="card-price-block">
									<p className="card-price-red"></p>
									<p className="card-price">$ 29.00 USD</p>
									<p className="card-price-line"></p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;  