import React, { useEffect, useState } from 'react';
import './FeatureProducts.scss';
import Card from '../card/Card';
import axios from 'axios';

const FeatureProducts = ({ type }) => {
	// Frist Fetch api data from backend
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const strapiApiToken = import.meta.env.VITE_APP_API_TOKEN;
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					`${
						import.meta.env.VITE_APP_API_URL
					}/products?populate=*&[filters][type][$eq]=${type}`,
					{
						headers: {
							Authorization: ` bearer ${strapiApiToken} `,
						},
					}
				);
				setData(res.data.data);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			} catch (error) {
				setError(true);
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	// useEffect(() => {
	// 	const strapiApiToken = import.meta.env.VITE_APP_API_TOKEN;
	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await axios.get(
	// 				`${
	// 					import.meta.env.VITE_APP_API_URL
	// 				}/products?populate=*&[filters][type][$eq]=${type}`,
	// 				{
	// 					headers: {
	// 						Authorization: ` bearer ${strapiApiToken} `,
	// 					},
	// 				}
	// 			);
	// 			setData(res.data.data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	setTimeout(() => {
	// 		fetchData();
	// 	}, 5000);
	// }, []);

	return (
		<div className="featuredProducts">
			{/* FEATURED PRODUCTS TOP START*/}
			<div className="top">
				<h1>{type}</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Laboriosam voluptate tempora eligendi quis itaque dolorum
					accusamus suscipit aperiam rerum perspiciatis? Eos consequatur,
					veniam neque quos soluta, possimus numquam, illo dolorum nostrum
					iure molestiae assumenda voluptatibus!
				</p>
			</div>
			<div className="bottom">
				{error ? (
					'Something went wrong!'
				) : loading ? (
					<div className="loading">
						<h1>loading...</h1>
					</div>
				) : (
					data.map((item) => <Card item={item} key={item.id} />)
				)}
			</div>
		</div>
	);
};

export default FeatureProducts;
