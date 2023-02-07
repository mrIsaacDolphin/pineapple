import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Styles from "./Register.module.css";

const Register = () => {

	const [email, setEmail] = useState<string>();

	const handleRegisterButton = (event: any) => {
		console.log("Register button clicked.");
		setEmail(event.target.value);
	};

	const navigate = useNavigate();
	return (
		<>
			<div className={ Styles.Container }>
				<h1>Register.tsx</h1>
				<div className={ Styles.Form }>
					<label htmlFor="email">Email</label>
					<br />
					<input type="email" />
				</div>
				<button onClick={handleRegisterButton}>Register</button>
				<p>Email: {email}</p>
			</div>
		</>
	);
};

export default Register;