import React from "react";
import Tile from "./Tile";

class Tilelist extends React.Component {
	state = require("./DiabetesTypeData.json");
	render() {
		return (
			<div className="card-group mb-5">
				<Tile data={this.state[0]} />
				<Tile data={this.state[1]} />
				<Tile data={this.state[2]} />
			</div>
		);
	}
}
export default Tilelist;
