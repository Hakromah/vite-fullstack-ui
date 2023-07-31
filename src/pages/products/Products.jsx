import React, { useState } from 'react';
import './Products.scss';
import List from '../../components/list/List';
import { useParams } from 'react-router-dom';

const Products = () => {
	const catId = parseInt(useParams().id); // it has been conversted to integger
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);
	return (
		<div className="products">
			{/* category left start */}
			<div className="left">
				{/* filter by categories start */}
				<div className="filterItem">
					<h2>Products Categories</h2>
					<div className="inputItem">
						<input type="checkbox" id="1" value={1} />
						<label htmlFor="1">Shoes</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="2" value={2} />
						<label htmlFor="2">Accessory</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="3" value={3} />
						<label htmlFor="3">Coat</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="4" value={4} />
						<label htmlFor="4">Skirt</label>
					</div>
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
				<List catId={catId} maxPrice={maxPrice} sort={sort} />
			</div>
		</div>
	);
};

export default Products;
