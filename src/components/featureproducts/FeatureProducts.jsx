import React, { useEffect, useState } from 'react';
import './FeatureProducts.scss';
import Card from '../card/Card';
import feature1 from '/img/feature1.jpg';
import feature11 from '/img/feature11.jpg';
import feature2 from '/img/feature2.jpg';
import feature22 from '/img/feature22.jpg';
import feature3 from '/img/feature3.jpg';
import feature33 from '/img/feature33.jpg';
import feature4 from '/img/feature4.jpg';
import feature44 from '/img/feature44.jpg';
import axios from 'axios';

const FeatureProducts = ({ type }) => {
	const featureData = [
		{
			id: 1,
			img: feature1,
			img2: feature11,
			title: 'Women Jacket',
			isNew: true,
			oldPrice: 28,
			price: 13,
		},
		{
			id: 2,
			img: feature2,
			img2: feature22,
			title: 'Long dress',
			isNew: true,
			oldPrice: 25,
			price: 13,
		},
		{
			id: 3,
			img: feature3,
			img2: feature33,
			title: 'Coat for men',
			isNew: false,
			oldPrice: 50,
			price: 38,
		},
		{
			id: 4,
			img: feature4,
			img2: feature44,
			title: 'New Fashion',
			isNew: true,
			oldPrice: 20,
			price: 20,
		},
	];

	// Frist Fetch api data from backend
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get(
					process.env.REACT_APP_API_URL + '/products',
					{
						headers: {
							Authorization: 'bearer' + process.env.REACT_APP_API_TOKEN,
						},
					}
				);
				console.log(data);
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
			{/* FEATURED PRODUCTS TOP END*/}

			{/* FEATURED PRODUCTS BOTTOM START */}
			<div className="bottom">
				{featureData?.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
			{/* FEATURED PRODUCTS BOTTOM START */}
		</div>
	);
};

export default FeatureProducts;
