import React from "react";
import "./footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer bg-dark">
				<div className="container-fluid pt-3">
					<nav>
						<p className="copyright text-center">
							©<script>document.write(new Date().getFullYear())</script>
							Designed & Developed by{" "}
							<strong>
								<a
									href="https://in.linkedin.com/in/scientist"
									target="_BLANK"
									rel="noreferrer">
									Aamir Sofi.
								</a>{" "}
								& Umar Wani
							</strong>
						</p>
					</nav>
				</div>
			</footer>
		);
	}
}
export default Footer;
