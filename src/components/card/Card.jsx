import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
	return (
		<Link className="link" to={`/product/${item.id}`}>
			<div className="card">
				<div className="image">
					{item.isNew && <span>New Season</span>}
					<img src={item.img} alt="" className="mainImg" />
					<img src={item.img2} alt="" className="secondImg" />
				</div>
				<h2>{item.title}</h2>
				<div className="prices">
					<h3>&#36;{item.oldPrice}</h3>
					<h3>&#36;{item.price}</h3>
					{item.oldPrice > item.price && (
						<h3>
							{(
								((item.oldPrice - item.price) / item.oldPrice) *
								100
							).toFixed(2)}
							% off
						</h3>
					)}
				</div>
			</div>
		</Link>
	);
};

export default Card;
