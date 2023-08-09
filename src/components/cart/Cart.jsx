import React from 'react';
import './Cart.scss';
import { MdOutlineDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const Cart = () => {
	const products = useSelector((state) => state.cart.products);
	const dispatch = useDispatch();

	const totalPrice = () => {
		let total = 0;
		products.forEach((item) => (total += item.quantity * item.price));

		return total.toFixed(2);
	};

	// payment api request and execution of the payment
	const stripePromise = loadStripe(
		'pk_test_51NcG27IXjUaKEtyjgKptFp33Q6fQytZ7rALaJtRINPnXmFSXXFG5v4YRM6ApVtkWa2QF3qwf0jrhGnrpb4AiZfCZ00RcwOh6SP'
	);
	const handlePayment = async () => {
		const apiUrl = `${import.meta.env.VITE_APP_API_URL}`;
		const apiToken = `${import.meta.env.VITE_APP_API_TOKEN}`;

		const headers = {
			Authorization: `Bearer ${apiToken}`,
		};
		try {
			const stripe = stripePromise;
			const res = await axios.post(`${apiUrl}/orders`, {
				headers,
				products,
			});
			await stripe.redirectToCheckout({
				sessionId: res.data.stripeSession.id,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="cart">
			<h1>Products in your cart</h1>
			{products?.map((item) => (
				<div className="item" key={item.id}>
					<img
						src={`${import.meta.env.VITE_APP_UPLOAD_URL}` + item.img}
						alt=""
					/>
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc?.substring(0, 100)}</p>
						<div className="price">
							{item.quantity}x &#36;{item.price}
						</div>
					</div>
					<MdOutlineDelete
						className="delete"
						onClick={() => dispatch(removeItem(item.id))}
					/>
				</div>
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>&#36;{totalPrice()}</span>
			</div>
			<button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
			<span className="reset" onClick={() => dispatch(resetCart())}>
				Reset Cart
			</span>
		</div>
	);
};

export default Cart;
