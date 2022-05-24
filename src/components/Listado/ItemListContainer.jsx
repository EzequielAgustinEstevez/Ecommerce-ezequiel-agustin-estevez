import React, { useEffect, useState, useContext } from 'react';
import { ItemList } from './ItemList';
import { GeneralContext } from '../../context/GeneralContext';
import product from '../../db/db';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ItemListContainer = () => {
	const { categoryId } = useParams();
	const { searchValue, searchedProducts } = useContext(GeneralContext);

	/* ESTADOS DB  */
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [products, setProducts] = useState([]);

	/* _BASE DE DATOS  */
	const productPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(() => {
				if (categoryId) {
					return product.filter((producto) => producto.category === categoryId);
				}
				return product;
			});
		}, 2000);
	});

	useEffect(() => {
		setLoading(true);
		productPromise
			.then((result) => {
				setProducts(result);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			});
	}, [categoryId]);
	return (
		<Box sx={{ minHeight: '90vh' }}>
			{loading ? (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			) : (
				<ItemList
					data={!searchValue.length >= 1 ? products : searchedProducts}
					error={error}
					loading={loading}
				/>
			)}
		</Box>
	);
};

export { ItemListContainer };
