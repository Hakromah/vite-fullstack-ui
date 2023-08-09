import React from 'react';
import './FeatureProducts.scss';
import Card from '../card/Card';
import useFetch from '../../hooks/useFetch';

const FeatureProducts = ({ type }) => {
	// Frist Fetch api data from backen
	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][type][$eq]=${type}`
	);
	console.log(data);
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
					data?.map((item) => <Card item={item} key={item.id} />)
				)}
			</div>
		</div>
	);
};

export default FeatureProducts;
