import React from 'react';
import './Cart.scss';
import { MdOutlineDelete } from 'react-icons/md';
import feature1 from '/img/feature1.jpg';
import feature11 from '/img/feature11.jpg';
import feature2 from '/img/feature2.jpg';
import feature22 from '/img/feature22.jpg';

const Cart = () => {
	const data = [
		{
			id: 1,
			img: feature1,
			img2: feature11,
			title: 'Women Jacket',
			desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
			isNew: true,
			oldPrice: 28,
			price: 13,
		},
		{
			id: 2,
			img: feature2,
			img2: feature22,
			title: 'Long dress',
			desc: 'Lorem, onsectetur adipisicing elit. consectetur adipisicing elit',
			isNew: true,
			oldPrice: 25,
			price: 13,
		},
	];
	return (
		<div className="cart">
			<h1>Products in your cart</h1>
			{data?.map((item) => (
				<div className="item" key={item.id}>
					<img src={item.img} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc?.substring(0, 100)}</p>
						<div className="price">1 x &#36;{item.price}</div>
					</div>
					<MdOutlineDelete className="delete" />
				</div>
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>&#36;115</span>
			</div>
			<button>PROCEED TO CHECKOUT</button>
			<span className="reset">Reset Cart</span>
		</div>
	);
};

export default Cart;
