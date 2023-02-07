import React from "react";

import { useNavigate } from "react-router-dom";

import Styles from "./Navigate.module.css";

const Navigate = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>Navigate.tsx</h1>
			<div className={ Styles.Container }>
				<p onClick={() => navigate("/")}>
					Home
				</p>
				<p onClick={() => navigate("/register")}>
					Register
				</p>
				<p onClick={() => navigate("/login")}>
					Login
				</p>
			</div>
		</>
	);
};

export default Navigate;