import React from 'react';
import { ItemList } from './ItemList';
import { GeneralContext } from '../context/GeneralContext';

const ItemListContainer = () => {
	const { error, loading, products, searchValue, searchedProducts } =
		React.useContext(GeneralContext);
	return (
		<ItemList
			data={!searchValue.length >= 1 ? products : searchedProducts}
			error={error}
			loading={loading}
		/>
	);
};

export { ItemListContainer };
