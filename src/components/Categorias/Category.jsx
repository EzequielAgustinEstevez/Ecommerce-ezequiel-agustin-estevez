import React from 'react';
import { ItemList } from '../Listado/ItemList';
import { GeneralContext } from '../../context/GeneralContext';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const Cateory = () => {
	const { error, loading, products, searchValue, searchedProducts } =
		React.useContext(GeneralContext);

	const { itemId } = useParams();
	const idSearch = products.findIndex((s) => s.id === itemId);

	return (
		<Box height={'100vh'}>
			{}
			<ItemList
				data={!searchValue.length >= 1 ? products : searchedProducts}
				error={error}
				loading={loading}
			/>
		</Box>
	);
};

export { Cateory };
