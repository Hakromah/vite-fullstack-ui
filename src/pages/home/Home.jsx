import React from 'react';
import Slider from '../../components/slider/Slider';
import './Home.scss';
import FeatureProducts from '../../components/featureproducts/FeatureProducts';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<FeatureProducts type="featured" />
			<Categories />
			<FeatureProducts type="trending" />
			<Contact />
		</div>
	);
};

export default Home;
