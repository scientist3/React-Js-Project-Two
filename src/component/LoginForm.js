import React from "react";
// get our fontawesome imports
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import wave from "../wave.png";
import bg from "../bg.svg";
import avatar from "../avatar.svg";
import "./login.css";

class LoginForm extends React.Component {
	render() {
		return (
			<div className="login-content mt-5 mb-5">
				<div className="left-img">
					<img className="back-ground-img" src={wave} alt=".." />
					<img className="fore-ground-img" src={bg} alt=".." />
				</div>
				<form method="POST" action="">
					<LoginHeader />
					<LoginFields />
					<LoginButton />
				</form>
			</div>
		);
	}
}

function LoginHeader() {
	return (
		<div>
			<img src={avatar} alt=".." />
			<h2 className="title">Welcome</h2>
		</div>
	);
}

function LoginFields() {
	return (
		<>
			<div className="input-div one">
				<div className="i">
					<FontAwesomeIcon icon={faUser} />
				</div>
				<div className="div">
					<h5>Username</h5>
					<input
						type="text"
						name="username"
						className="input"
						maxLength="150"
						required
						id="id_username"
					/>
				</div>
			</div>

			<div className="input-div pass">
				<div className="i">
					<FontAwesomeIcon icon={faLock} />
				</div>
				<div className="div">
					<h5>Password</h5>
					<input
						type="password"
						name="password"
						className="input"
						required
						id="id_password"
					/>
				</div>
			</div>
		</>
	);
}

function LoginButton() {
	return <div>Button</div>;
}

export default LoginForm;
