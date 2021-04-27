import React from "react";
import LoginForm from "./Login2";
import Tilelist from "./Tilelist";

class MainContent extends React.Component {
	render() {
		return (
			<div className="container">
				<LoginForm />
				<Tilelist />
			</div>
		);
	}
}
export default MainContent;
