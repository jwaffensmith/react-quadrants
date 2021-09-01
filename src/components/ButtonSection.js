import React, { Component } from "react";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class ButtonSection extends Component {

	componentWillUnmount() {
		this.props.fetchData();
	};

	render() {
		return (
		<>
     	<section className="section">
				<div style={contentStyles}>
                	<button onClick={() => this.props.fetchData()}>New Content</button>
				</div>
		</section>
		</>
		)
	}
};

export default ButtonSection;

