import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const apiUrl = import.meta.env.VITE_APP_API_URL;
		const apiToken = import.meta.env.VITE_APP_API_TOKEN;

		const headers = {
			Authorization: `Bearer ${apiToken}`,
		};

		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`${apiUrl}${url}`, { headers });
				setData(res.data.data);
			} catch (error) {
				setError(true);
			}
			setLoading(false);
		};
		fetchData();
	}, [url]);
	return { data, loading, error };
};
export default useFetch;

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const useFetch = (url) => {
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState(false);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				setLoading(true);
// 				const res = await axios.get(url);
// 				setData(res.data.data);
// 			} catch (error) {
// 				setError(true);
// 			}
// 			setLoading(false);
// 		};
// 		fetchData();
// 	}, [url]);
// 	return { data, loading, error };
// };

// export default useFetch;
// src/useFetch.js
