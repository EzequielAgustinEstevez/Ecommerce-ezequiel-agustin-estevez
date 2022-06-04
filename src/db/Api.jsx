import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
	'7c13c3b9-be05-4e8e-91d2-a39692aeb1d8';

const Api = () => {
	const [url, setUrl] = useState('');

	const urlApi = async () => {
		const res = await axios(
			'/images/search?category_ids=1&height="140"&width="140"'
		);
		//console.log(res.data[0].url);
		setUrl(res.data[0].url);
	};

	useEffect(() => {
		return () => {
			urlApi();
		};
	}, []);

	return <CardMedia title="Gatitos" image={url} component="img" height="200" />;
};

export default Api;
