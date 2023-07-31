import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineFavoriteBorder, MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				{/* Left part start */}
				<div className="left">
					<div className="item">
						<img src="/img/libflag.png" alt="lib_imange" width={45} />
						<MdArrowDropDown size={20} />
					</div>
					<div className="item">
						<span>USD</span>
						<MdArrowDropDown size={20} />
					</div>
					<div className="item">
						<Link className="link" to="/products/1">
							Men
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/products/2">
							Women
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/products/3">
							Children
						</Link>
					</div>
				</div>
				{/* Left part end */}

				{/* Center area start */}
				<div className="center">
					<Link className="link" to="/">
						HSK STORE
					</Link>
				</div>
				{/* Right part */}
				<div className="right">
					<div className="item">
						<Link className="link" to="/">
							Homepage
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							About
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Contact
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Stores
						</Link>
					</div>
					<div className="icons">
						<AiOutlineSearch size={20} />
						<CgProfile size={20} />
						<MdOutlineFavoriteBorder size={20} />
						<div className="cartIcon">
							<BsCart3 size={20} />
							<span className="quantity">0</span>
						</div>
					</div>
				</div>
				{/* Right part end */}
			</div>
		</div>
	);
};

export default Navbar;
