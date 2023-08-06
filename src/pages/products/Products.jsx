import React, { useEffect, useState } from 'react';
import './Products.scss';
import List from '../../components/list/List';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
	const catId = parseInt(useParams().id); // it has been conversted to integger
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);
	const [selectedSubCats, setSelectedSubCats] = useState([]);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	//Fetch start for categories
	useEffect(() => {
		const strapiApiToken = import.meta.env.VITE_APP_API_TOKEN;
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					`${
						import.meta.env.VITE_APP_API_URL
					}/sub-categories?[filters][categories][id][$eq]=${catId}`,
					{
						headers: {
							Authorization: ` bearer ${strapiApiToken} `,
						},
					}
				);
				setData(res.data.data);
				setLoading(false);
			} catch (error) {
				setError(true);
				setLoading(true);
			}
		};
		fetchData();
	}, []);

	// Fetch end for categories
	const handleChange = (e) => {
		const value = e.target.value;
		const isChecked = e.target.checked;

		setSelectedSubCats(
			isChecked
				? [...selectedSubCats, value]
				: selectedSubCats.filter((item) => item !== value)
		);
	};
	console.log(selectedSubCats);

	return (
		<div className="products">
			{/* category left start */}
			<div className="left">
				{/* filter by categories start */}
				<div className="filterItem">
					<h2>Products Categories</h2>
					{data?.map((item) => (
						<div className="inputItem" key={item.id}>
							<input
								type="checkbox"
								id={item.id}
								value={item.id}
								onChange={handleChange}
							/>
							<label htmlFor={item.id}>{item.attributes.title}</label>
						</div>
					))}
				</div>
				{/* filter by categories end */}

				{/* filter by price start */}
				<div className="filterItem">
					<h2>Filter by price</h2>
					<div className="inputItem">
						<span>0</span>
						<input
							type="range"
							min={0}
							max={1000}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<span>{maxPrice}</span>
					</div>
				</div>
				{/* filter by price end */}

				{/* Sort by */}
				<div className="filterItem">
					<h2>Sort by</h2>
					<div className="inputItem">
						<input
							type="radio"
							id="asc"
							value="asc"
							name="price"
							onChange={(e) => setSort('asc')}
						/>
						<label htmlFor="asc">Price (Lower first)</label>
					</div>
					<div className="inputItem">
						<input
							type="radio"
							id="desc"
							value="desc"
							name="price"
							onChange={(e) => setSort('desc')}
						/>
						<label htmlFor="desc">Price (Highest first)</label>
					</div>
				</div>
			</div>
			{/* category left end */}

			<div className="right">
				<img className="catImg" src="/img/sea1.jpg" alt="" />
				<List
					catId={catId}
					maxPrice={maxPrice}
					sort={sort}
					subCats={selectedSubCats}
				/>
			</div>
		</div>
	);
};

export default Products;
