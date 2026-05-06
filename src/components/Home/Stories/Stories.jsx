import React from "react";
import { Link } from "react-router-dom";
import stories_1 from "./images/stories-1.webp";
import stories_2 from "./images/stories-2.webp";
import stories_3 from "./images/stories-3.webp";
import "./Stories.css";
import "./StoriesResponsive.css";

const Stories = () => {
	return (
		<section id="stories" className="stories">
			<div className="container">
				<div className="stories-content">
					<div className="stiries-block">
						<img src={stories_1} alt="" className="stories-img" />
						<p className="stories-top-text">
							Health Check: why do I get a headache when I haven’t had my coffee?
						</p>
						<p className="stories-sub-text">
							It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
						</p>
						<p className="stories-data">October 9, 2018</p>
					</div>
					<div className="stiries-block">
						<img src={stories_2} alt="" className="stories-img" />
						<p className="stories-top-text">
							How long does a cup of coffee keep you awake?
						</p>
						<p className="stories-sub-text">
							It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.
						</p>
						<p className="stories-data">October 9, 2018</p>
					</div>
					<div className="stiries-block">
						<img src={stories_3} alt="" className="stories-img" />
						<p className="stories-top-text">
							Recent research suggests that heavy coffee drinkers may reap health benefits.
						</p>
						<p className="stories-sub-text">
							It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
						</p>
						<p className="stories-data">October 9, 2018</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stories;  