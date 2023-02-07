import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Styles from "./App.module.css";

import Navigate from "./components/Navigate/Navigate";
import Footer from "./components/Footer/Footer";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

// *** Importing Pages ***
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<div className={ Styles.Container }>
				<BrowserRouter>
					<Navigate />
					<Routes>
						<Route path="/" element={ <Home /> } />
						<Route path="/register" element={ <Register /> } />
						<Route path="/login" element={ <Login /> } />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
