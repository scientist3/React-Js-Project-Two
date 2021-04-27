import React from "react";
import LoginForm from "./Login2";
import Tilelist from "./Tilelist";

class MainContent extends React.Component {
	render() {
		return (
			<div className="container">
				<LoginForm />
				<h1>Testing Deployment on Netlify.</h1>
				<Tilelist />
			</div>
		);
	}
}
export default MainContent;
