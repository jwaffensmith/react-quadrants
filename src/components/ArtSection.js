import React, { Component } from "react";


const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};


class ArtSection extends Component {
		
	render() {
		const randomGif = this.props.apiData[Math.floor(Math.random()*this.props.apiData.length)] 
		return (
			<>
			{randomGif ? 
			<section className="section">
				<div style={contentStyles}>
					<img alt="random gif" src={randomGif.images.preview_gif.url} />
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

export default ArtSection;
