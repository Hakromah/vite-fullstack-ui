import React, { useEffect, useState } from 'react';
import './FeatureProducts.scss';
import Card from '../card/Card';
import axios from 'axios';

const FeatureProducts = ({ type }) => {
	// Frist Fetch api data from backend
	const [data, setData] = useState([]);

	useEffect(() => {
		const strapiApiToken = import.meta.env.VITE_APP_API_TOKEN;
		const fetchData = async () => {
			try {
				const res = await axios.get(
					`${import.meta.env.VITE_APP_API_URL}/products?populate=*`,
					{
						headers: {
							Authorization: ` bearer ${strapiApiToken} `,
						},
					}
				);
				setData(res.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

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
				{data.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default FeatureProducts;
