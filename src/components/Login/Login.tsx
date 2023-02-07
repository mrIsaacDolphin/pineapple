import React from "react";

import { useNavigate } from "react-router-dom";

import Styles from "./Login.module.css";

const handleLoginButton = () => {
	console.log("Login button clicked");
};

const Login = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className={ Styles.Container }>
				<h1>Login.tsx</h1>
				<div className={ Styles.Form }>
					<label htmlFor="email">Email</label>
					<br />
					<input type="email" id="email" />
				</div>
				<button onClick={handleLoginButton}>Login</button>
			</div>
		</>
	);
};

export default Login;