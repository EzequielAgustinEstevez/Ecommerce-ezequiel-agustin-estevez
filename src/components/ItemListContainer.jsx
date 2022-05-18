import React, { useEffect } from 'react';
import { ItemList } from './ItemList';
import { productDb } from '../db/db';
import { GeneralContext } from '../context/GeneralContext';

const ItemListContainer = () => {
	const { searchedProducts } = React.useContext(GeneralContext);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [products, setProducts] = React.useState([]);

	const fetchProductos = async () => {
		try {
			const productsa = await new Promise((resolve) => {
				setTimeout(() => {
					resolve(productDb);
				}, 2000);
			});
			setProducts(productsa);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
			setError(true);
		}
	};

	useEffect(() => {
		fetchProductos();
		// eslint-disable-next-line
	}, []);
	return <ItemList data={searchedProducts} error={error} cargando={loading} />;
};

export { ItemListContainer };
