import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/common";
import { Home, Page_1, Page_2, Page_3 } from "./components";

const App = () => {
	return (
		<div className="wrapper">
			<Header />

			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Page_1" element={<Page_1 />} />
					<Route path="/Page_2" element={<Page_2 />} />
					<Route path="/Page_3" element={<Page_3 />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
};

export default App;



// // App.jsx с lazy loading если нужна ленивая загрузка:
// import React, { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Header, Footer } from "./components/common";

// const Home = lazy(() => import("./components/Home/Home"));
// const Page_1 = lazy(() => import("./components/Page_1/Page_1"));
// const Page_2 = lazy(() => import("./components/Page_2/Page_2"));
// const Page_3 = lazy(() => import("./components/Page_3/Page_3"));

// const App = () => {
// 	return (
// 		<div className="wrapper">
// 			<Header />

// 			<main className="main">
// 				<Suspense fallback={<p>Loading...</p>}>
// 					<Routes>
// 						<Route path="/" element={<Home />} />
// 						<Route path="/Page_1" element={<Page_1 />} />
// 						<Route path="/Page_2" element={<Page_2 />} />
// 						<Route path="/Page_3" element={<Page_3 />} />
// 					</Routes>
// 				</Suspense>
// 			</main>

// 			<Footer />
// 		</div>
// 	);
// };

// export default App;         