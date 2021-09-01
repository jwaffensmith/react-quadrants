import React, { Component } from "react";
import { Cat } from 'react-kawaii';

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class KawaiiSection extends Component {

	render () {
		console.log(this.props.data, this.props.apiData)
	return (
			<>
			{ this.props.data.length > 0 && this.props.apiData.length > 0 ? (
			<section className="section">
				<div style={contentStyles}>
					<Cat size={320} mood="blissful" color="#596881" />
				</div>
			</section> 
			) : ( 
			<>
			<section className="section">
				<div style={contentStyles}>
				<Cat size={320} mood="sad" color="#596881" />
				</div>
			</section>
			</>
			)};
			</>
		);
	}
};

export default KawaiiSection;