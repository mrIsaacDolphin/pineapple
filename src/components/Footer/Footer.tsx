import React from "react";

import { useNavigate } from "react-router-dom";

import Styles from "./Footer.module.css";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className={ Styles.Container }>
				<h1>Footer.tsx</h1>
				<p>Copyright Isaac Dolphin 2023</p>
			</div>
		</>
	);
};

export default Footer;