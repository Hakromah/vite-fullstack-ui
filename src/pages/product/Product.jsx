import React, { useState } from 'react';
import './Product.scss';

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
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
			<div className="right">RIGHT</div>
		</div>
	);
};

export default Product;
