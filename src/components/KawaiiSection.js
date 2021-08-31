import React, { Component } from "react";
import { Cat } from 'react-kawaii';

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class kawaiiSection extends Component {
	render () {
	return (
			// { this.state.data ? (
			<>
			<section className="section">
				<div style={contentStyles}>
					<Cat size={320} mood="blissful" color="#596881" />
				</div>
			</section>
			</>
			// ) : (
			// <section className="section">
			// 	<div style={contentStyles}>
			// 	<Cat size={320} mood="sad" color="#596881" />
			// 	</div>
			// </section>
			// )}
		);
	}
};

export default kawaiiSection;