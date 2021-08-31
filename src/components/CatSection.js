import React, { Component } from "react";

class CatSection extends Component {

	render() {
		if (this.props.data[0]) {
			console.log(this.props.data[0].url, "cat data");
		} else {
			console.log("nope");
		}
		return (
			<>
			{this.props.data[0] ? 
			<>
			<img src={this.props.data[0].url}/>
			</> : 
			<>
			<p></p>
			</>
			}
			</>
		)
		// const data = this.props.data[0].url;
		// console.log(data, "data");
		// // console.log(data[0], "data index");
		// // console.log(data[0].url, "api url");
		// if (data) {
		// 	// const { url } = data;
		// 	// console.log(this.props.data, "CAT DATA!")
		// 	return (
		// 		<section className="section">
		// 			<img src={data} alt="cat"/>
		// 		</section>
		// 	);
		// } else {
		// 	return (
		// 		<div>I'm loading!</div>
		// 	);
		// }
	}
}

export default CatSection;

