import React, { useEffect, useState } from 'react';
import './List.scss';
import axios from 'axios';
import Card from '../card/Card';

const List = ({ subCats, maxPrice, sort, catId }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	//Fetch start for categories
	useEffect(() => {
		const strapiApiToken = import.meta.env.VITE_APP_API_TOKEN;
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					`${
						import.meta.env.VITE_APP_API_URL
					}/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
						(item) => `&[filters][sub_categories][id][$eq]=${item}`
					)}`,
					{
						headers: {
							Authorization: `bearer ${strapiApiToken}`,
						},
					}
				);
				setData(res.data.data);
				setTimeout(() => {
					setLoading(false);
				}, 2000);
			} catch (error) {
				setError(true);
				setLoading(true);
			}
		};
		fetchData();
	}, []);
	// Fetch end for categories

	return (
		<div className="list">
			{loading
				? 'loading...'
				: data?.map((item) => <Card item={item} key={item.id} />)}
		</div>
	);
};

export default List;
