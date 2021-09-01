import React, { Component } from "react";
import CatSection from "./CatSection";
const apiKey = process.env.REACT_APP_CAT_API_KEY;
const fetchUrl = "https://api.thecatapi.com/v1/images/search";


class CatApi extends Component {
	state = {
		catData: [],
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
			catData: json,
		 	});
		});
	};

	render() {
		const { catData } = this.state;
		console.log(catData);
		return (
			
			<CatSection data={catData} />
		);
	}
}

export default CatApi;