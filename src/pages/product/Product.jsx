import React, { useState } from 'react';
import './Product.scss';
import { BiCartAdd } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaBalanceScale } from 'react-icons/fa';

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const images = ['/img/image1.jpg', '/img/image2.jpg'];

	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
					<img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
				</div>
				<div className="mainImg">
					<img src={images[selectedImg]} alt="" />
				</div>
			</div>
			{/* Right Part start */}
			<div className="right">
				<h1>Product Dtails</h1>
				<span className="price">&#36;52</span>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
					deserunt laboriosam dignissimos repudiandae libero quo veniam
					quam, earum quasi modi minima voluptate. Exercitationem commodi,
					illo fuga aut autem quasi! Sequi?
				</p>
				<div className="quantity">
					<button
						onClick={() =>
							setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
						}
					>
						-
					</button>
					{quantity}
					<button onClick={() => setQuantity((prev) => prev + 1)}>
						+
					</button>
				</div>
				<button className="add">
					<BiCartAdd /> ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<MdFavoriteBorder /> ADD TO WISH LIST
					</div>
					<div className="item">
						<FaBalanceScale /> ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span> Vendor: Yağmur</span>
					<span> Product type: Women Coat</span>
					<span> Tag: Coat, Women, Top</span>
				</div>
				<hr />
				<div className="info">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
			{/* Right Part start */}
		</div>
	);
};

export default Product;
