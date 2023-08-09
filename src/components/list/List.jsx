import React from 'react';
import './List.scss';
import Card from '../card/Card';
import useFetch from '../../hooks/useFetch';



const List = ({ subCats, maxPrice, sort, catId }) => {
	//Fetch start for categories
	const { data, loading} = useFetch (
		`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
			(items) => `&[filters][sub_categories][id][$eq]=${items}`
		)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
	);
	// Fetch end for categories

	return (
		<div className="list">
			{loading
				? 'loading...'
				: data?.map((item) => (
						<Card item={item} key={item.id} />
				  ))}
		</div>
	);
};

export default List;
