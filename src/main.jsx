import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/reset.css";
import "./styles/base.css";

// Для реального хостинга удалить эту строку
// Для реального хостинга указываем basename="/"
const basename = import.meta.env.PROD ? '/coffeestyle' : '/';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router basename={basename}>
			<App />
		</Router>
	</React.StrictMode>
);
