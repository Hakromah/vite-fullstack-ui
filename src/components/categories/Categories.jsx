import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = () => {
	return (
		<div className="categories">
			{/* FIRST COLUMN */}
			<div className="col">
				<div className="row">
					<img src="/img/categ1.jpg" alt="" />
					<button>
						<Link className="link" to="/products/1">
							Sale
						</Link>
					</button>
				</div>
				<div className="row">
					<img src="/img/categ5.jpg" alt="" />
					<button>
						<Link className="link" to="/products/1">
							Women
						</Link>
					</button>
				</div>
			</div>

			{/* MIDLE COLUMN */}
			<div className="col">
				<div className="row">
					<img src="/img/categ2.jpg" alt="" />
					<button>
						<Link className="link" to="/products/1">
							New season
						</Link>
					</button>
				</div>
			</div>
			{/* BIG COLUMN */}
			<div className="col col-lg">
				{/* Big col to row */}
				<div className="row">
					<div className="col">
						<div className="row ">
							<img src="/img/categ3.jpg" alt="" />
							<button>
								<Link className="link" to="/products/1">
									Men
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img src="/img/categ4.jpg" alt="" />
							<button>
								<Link className="link" to="/products/1">
									Accessories
								</Link>
							</button>
						</div>
					</div>
				</div>
				{/* BIG COL BOTTOM ROW */}
				<div className="row">
					<img src="/img/categ6.jpg" alt="" />
					<button>
						<Link className="link" to="/products/1">
							Shoes
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Categories;
