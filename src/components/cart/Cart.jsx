import React from 'react';
import './Cart.scss';
import { MdOutlineDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '../../utils/api';

const stripePromise = loadStripe(
	`${import.meta.env.VITE_PUBLIC_STRAPE_PUBLISHABLE_KEY}`
);

const Cart = () => {
	const products = useSelector((state) => state.cart.products);
	const dispatch = useDispatch();

	const totalPrice = () => {
		let total = 0;
		products.forEach((item) => (total += item.quantity * item.price));

		return total.toFixed(2);
	};

	// payment api request and execution of the payment

	const handleCheckout = async () => {
		try {
			const stripe = await stripePromise;
			const res = await makePaymentRequest('/api/orders', {
				products,
			});

			await stripe.redirectToCheckout({
				sessionId: res.data.stripeSession.id,
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	// const [loading, setLoading] = useState(false);

	// const handleCheckout = async () => {
	// 	try {
	// 		setLoading(true);
	// 		const stripe = await stripePromise;

	// 		// Fetch necessary payment data from your server, replace with your actual endpoint
	// 		const response = await fetch('/api/orders');
	// 		const paymentData = await response.json();

	// 		// Initiate Stripe Checkout
	// 		const { error } = await stripe.redirectToCheckout({
	// 			sessionId: paymentData.sessionId,
	// 		});

	// 		if (error) {
	// 			console.error('Error during checkout:', error);
	// 		}
	// 	} catch (err) {
	// 		console.error('Error:', err);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

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
			<button onClick={handleCheckout}>Checkout</button>
			<span className="reset" onClick={() => dispatch(resetCart())}>
				Reset Cart
			</span>
		</div>
	);
};

export default Cart;
