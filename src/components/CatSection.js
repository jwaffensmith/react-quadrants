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
		return (
			<>
			{this.props.data[0] ? 
			<section className="section" onClick={this.handleOnClick} >
				<div style={contentStyles}>
					<img 
					width="200"
					height="100"
					src={this.props.data[0].url} 
					alt="cat"/>
				</div>
			</section> : 
			<>
			<p></p>
			</>
			}
			</>
		)
	}
}

export default CatSection;

