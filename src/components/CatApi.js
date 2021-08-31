import React, { Component } from "react";
import CatSection from "./CatSection";
const apiKey = process.env.REACT_APP_CAT_API_KEY;
const fetchUrl = "https://api.thecatapi.com/v1/images/search";


class CatApi extends Component {
	state = {
		images: [],
	  };

	componentDidMount() {
		fetch(fetchUrl, {
			method: "GET",
			headers: {
				'x-api-key': apiKey
			}
		})
		.then(response => response.json())
		.then(json => {
			this.setState({ 
			images: json,
		 	});
		});
	};

	render() {
		return (
			
			<CatSection data={this.state.images} />
		);
	}
}

export default CatApi;