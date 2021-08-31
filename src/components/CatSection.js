import React, { Component } from "react";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class CatSection extends Component {

	render() {
	const { image } = this.props.data
		return (
			<section className="section">
				<img src={image} />
			</section>
		);
	}
}

export default CatSection;

