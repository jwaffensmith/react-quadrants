import React, { Component } from "react";
import Loader from "./Loader";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};


class ArtSection extends Component {
	// 	state = {
	// 	data: "",
	// };

	// componentDidMount() {
	// 	this.setState({ data: this.props.apiData.images.preview_gif.url});
	// }
	
	render() {
		return (
			<>
			{this.props.apiData[0] ? 
			<section className="section">
				<div style={contentStyles}>
					<img alt="random gif" src={this.props.apiData[0].images.preview_gif.url} />
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

// class ArtSection extends Component {
// 	state = {
// 		data: "",
// // 	};
// this.state.data && 
// 	getRandomImage = (arr) => {
// 		const rand = Math.random() * arr.length;
// 		const index = Math.floor(rand);
// 		const url = arr[index].images.preview_gif.url;
// 		this.setState({ data: url });
// 	};

// 	handleOnClick = () => this.getRandomImage(this.props.apiData);

// 	componentWillUnmount() {
// 		this.handleOnClick();
// 	}

// 	generateContent = () => {
// 		if (!this.state.data && this.props.apiData.length) {
// 			this.getRandomImage(this.props.apiData);
// 			return <Loader styles={contentStyles} />;
// 		} else {
// 			return (
				// <div style={contentStyles}>
				// 	<img alt="random gif" src={this.state.data} />
				// </div>
// 			);
// 		}
// 	};

// 	render() {
// 		return (
// 			<section className="section" onClick={this.handleOnClick}>
// 				{this.generateContent()} 
// 			</section>
// 		);
// // 	}
// }

export default ArtSection;
