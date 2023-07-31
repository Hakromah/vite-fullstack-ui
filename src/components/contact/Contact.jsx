import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import {
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsGithub,
	BsTwitter,
} from 'react-icons/bs';

const Contact = () => {
	return (
		<div className="contact">
			<div className="wrapper">
				<span>GET IN TOUCH WITH US:</span>
				<div className="mail">
					<input type="text" placeholder="Enter ypur email..." />
					<button>JOIN US</button>
				</div>
				<div className="icons">
					<BsFacebook />
					<BsInstagram />
					<BsTwitter />
					<BsLinkedin />
					<BsGithub />
				</div>
			</div>
		</div>
	);
};

export default Contact;
