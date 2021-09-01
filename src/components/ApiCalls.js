import ArtSection from "./ArtSection";
import CatSection from "./CatSection";
import React, { Component } from "react";
import ButtonSection from "./ButtonSection";
import KawaiiSection from "./KawaiiSection";
const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "art";
const fetchArtUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;
const catApiKey = process.env.REACT_APP_CAT_API_KEY;
const fetchCatUrl = "https://api.thecatapi.com/v1/images/search";


class ApiCalls extends Component {
	state = {
		apiData: [],
		catData: [],
	};

	componentDidMount() {
		fetch(fetchArtUrl)
			.then((res) => res.json())
			.then((json) => this.setState({ apiData: json.data }));
		
		fetch(fetchCatUrl, {
			method: "GET",
			headers: {
				'x-api-key': catApiKey
			}
		})
		.then(response => response.json())
		.then(json => {
			this.setState({ 
			catData: json,
			});
		});
	}

	render() {
		const { catData, apiData } = this.state;	
		return (
			<>
				<ArtSection apiData={apiData} />
				<CatSection data={catData} />
				<KawaiiSection apiData={apiData}  data={catData}/>
				<ButtonSection data={catData} apiData={apiData} />
			</>
		);
	}
}

export default ApiCalls;