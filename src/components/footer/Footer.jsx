import React from 'react';
import './Footer.scss';
const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<h1>Categoriea</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum, eius explicabo ad magnam quia voluptatem soluta neque
						illum? Animi, necessitatibus?
					</span>
				</div>
				<div className="item">
					<h1>Contact</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum, eius explicabo ad magnam quia voluptatem soluta neque
						illum? Animi, necessitatibus?
						<span>&copy;</span>
					</span>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span className="logo">HSKStore</span>
					<span className="copyright">
						&copy; Copyright 2023. All Right Revserved
					</span>
				</div>
				<div className="right">
					<img src="/img/payment.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
