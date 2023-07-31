import { useState } from 'react';
import { MdOutlineEast, MdOutlineWest } from 'react-icons/md';
import { default as slider1 } from '/img/slide1.jpg';
import { default as slider2 } from '/img/slide2.jpg';
import { default as slider3 } from '/img/slide3.jpg';
import './Slider.scss';

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const prevSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? data.length -1 : (prev) => prev - 1
		);
	};
	const nextSlide = () => {
		setCurrentSlide(
			currentSlide === data.length - 1 ? 0 : (prev) => prev + 1
		);
	};

	const data = [slider1, slider2, slider3];
	return (
		<div className="slider">
			<div
				className="container"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				<img src={data[0]} alt="" />
				<img src={data[1]} alt="" />
				<img src={data[2]} alt="" />
			</div>

			<div className="icons">
				<div className="icon">
					<MdOutlineWest onClick={prevSlide} />
				</div>
				<div className="icon">
					<MdOutlineEast onClick={nextSlide} />
				</div>
			</div>
		</div>
	);
};

export default Slider;
