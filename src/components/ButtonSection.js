import React, { Component } from "react";


const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class ButtonSection extends Component {

	render() {
		return (
		<>
        <section className="section">
			<div style={contentStyles}>
                <button>Click For More</button>
			</div>
		</section>
		</>
		)
	}
};

export default ButtonSection;
