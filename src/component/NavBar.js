import React from "react";
import logo from "../logo.svg";

class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#abc">
					<img
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt=""
					/>
					Diabetes Prediction System
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav m-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#abc">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#abc">
								Predict
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#abc"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Account
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#abc">
									Login
								</a>
								<a className="dropdown-item" href="#abc">
									Sign Up
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#def">
									Admin Login
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#abc">
								About
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
