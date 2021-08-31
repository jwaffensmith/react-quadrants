import ArtSection from "./ArtSection";
import React, { Component } from "react";
const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "art";
const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;


class ArtApi extends Component {
	state = {
		apiData: [],
	};

	componentDidMount() {
		fetch(fetchUrl)
			.then((res) => res.json())
			.then((json) => this.setState({ apiData: json.data }));
	}

	render() {
		return (
				<ArtSection apiData={this.state.apiData} />
		);
	}
}

export default ArtApi;