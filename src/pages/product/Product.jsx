import React, { useState } from 'react';
import './Product.scss';
import { BiCartAdd } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaBalanceScale } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
	const { id } = useParams();
	const [selectedImg, setSelectedImg] = useState('img');
	const [quantity, setQuantity] = useState(1);

	const dishpatch = useDispatch();
	//const images = ['/img/image1.jpg', '/img/image2.jpg'];
	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
	return (
		<div className="product">
			{loading ? (
				'loading'
			) : (
				<>
					<div className="left">
						<div className="images">
							<img
								src={
									`${import.meta.env.VITE_APP_UPLOAD_URL}` +
									data?.attributes?.img?.data?.attributes?.url
								}
								alt="first image"
								onClick={() => setSelectedImg('img')}
							/>
							<img
								src={
									`${import.meta.env.VITE_APP_UPLOAD_URL}` +
									data?.attributes?.img2?.data?.attributes?.url
								}
								alt="second image"
								onClick={() => setSelectedImg('img2')}
							/>
						</div>
						<div className="mainImg">
							<img
								src={
									`${import.meta.env.VITE_APP_UPLOAD_URL}` +
									data?.attributes[selectedImg]?.data?.attributes?.url
								}
								alt="main image"
							/>
						</div>
					</div>
					{/* Right Part start */}
					<div className="right">
						<h1>{data?.attributes?.title}</h1>
						<span className="price">&#36;{data?.attributes?.price}</span>
						<p>{data?.attributes?.desc}</p>
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
						<button
							className="add"
							onClick={() =>
								dishpatch(
									addToCart({
										id: data.id,
										title: data.attributes.title,
										desc: data.attributes.desc,
										price: data.attributes.price,
										img: data.attributes.img.data.attributes.url,
										quantity,
									})
								)
							}
						>
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
				</>
			)}
			{/* Right Part start */}
		</div>
	);
};

export default Product;
