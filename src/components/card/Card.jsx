import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
	const { title, price, isNew, oldPrice, img, img2 } = item.attributes;
	const { url } = img.data.attributes;

	console.log('This my title', title);
	return (
		<Link className="link" to={`/product/${item.id}`}>
			<div className="card">
				<div className="image">
					{isNew && <span>New Season</span>}
					<img
						src={`${import.meta.env.VITE_APP_UPLOAD_URL}` + url}
						alt=""
						className="mainImg"
					/>
					<img
						src={
							`${import.meta.env.VITE_APP_UPLOAD_URL}`+
							img2.data.attributes.url
						}
						alt=""
						className="secondImg"
					/>
				</div>
				<h2>{title}</h2>
				<div className="prices">
					<h3>&#36;{oldPrice || price + 20}</h3>
					<h3>&#36;{price}</h3>
					{oldPrice > price && (
						<h3>
							{(((oldPrice - price) / oldPrice) * 100).toFixed(2)}% off
						</h3>
					)}
				</div>
			</div>
		</Link>
	);
};

export default Card;
