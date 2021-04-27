import React, { Component } from "react";

export default class Tile extends Component {
	render() {
		return (
			<div className="card">
				<img src={this.props.data.imgUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{this.props.data.title}</h5>
					<p className="card-text">{this.props.data.text}</p>
					<a href="#abc" className="btn btn-primary">
						Learn More
					</a>
				</div>
			</div>
		);
	}
}
