import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import product from '../../db/db';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (props) => {
	const { itemId } = useParams();

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const idSearch = new Promise((resolve) => {
		setTimeout(() => {
			resolve(product.find((producto) => producto.id === itemId));
		}, 2000);
	});

	useEffect(() => {
		idSearch
			.then((res) => {
				setProducts(res);
				setLoading(false);
			})
			.catch((err) => {
				setError(true);
				console.log(err);
			});
	}, [itemId]);

	return (
		<>
			<Box sx={{ minHeight: '90vh' }}>
				{error && <h1>Error</h1>}
				{loading ? (
					<Box sx={{ width: '100%' }}>
						<LinearProgress />
					</Box>
				) : (
					<ItemDetail
						name={products.name}
						image={products.image}
						stock={products.stock}
						initial={products.initial}
					/>
				)}
			</Box>
		</>
	);
};
export { ItemDetailContainer };
