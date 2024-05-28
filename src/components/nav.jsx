/** @format */

import React from "react";

const Nav = () => {
	return (
		<nav className="containerr">
			<div className="logo">
				<img src="/images/brand_logo.png" alt="brand-logo" />
			</div>
			<ul>
				<li href="#">MENU</li>
				<li href="#">LOCATION</li>
				<li href="#">ABOUT</li>
				<li href="#">CONTACT</li>
			</ul>

			<button>Login</button>
		</nav>
	);
};

export default Nav;
