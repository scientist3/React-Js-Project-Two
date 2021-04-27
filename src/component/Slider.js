import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					height="300px"
					className="d-block w-100"
					src="https://picsum.photos/id/901/900/300"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Diabetes Overview</h3>
					<p>The path to understanding diabetes starts here.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					height="300px"
					className="d-block w-100"
					src="https://picsum.photos/id/600/900/300"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>No matter where you are in your fight.</h3>
					<p>Here’s where you need to be.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					height="300px"
					className="d-block w-100"
					src="https://picsum.photos/id/405/900/300"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>New to Diabetes? Learn how diabetes is diagnosed.</h3>
					<p>
						Diabetes is a chronic disease that occurs when the pancreas is no
						longer able to make insulin, or when the body cannot make good use
						of the insulin it produces.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slider;
