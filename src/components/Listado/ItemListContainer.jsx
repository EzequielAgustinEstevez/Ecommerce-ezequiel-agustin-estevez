import Box from '@mui/material/Box';
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GeneralContext } from '../../context/GeneralContext';
import { ItemList } from './ItemList';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ItemListContainer = () => {
	const { categoryId } = useParams();
	const { searchValue, searchedProducts, stockMaximo, setStockMaximo } =
		useContext(GeneralContext);

	/* ESTADOS DB  */
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		//db
		//productos
		//QfBbs2ixVDAz89Jc5HAZ
		const db = getFirestore();
		let finalSearch;

		//? si existe la categoria entonces solo trae esa categoria con query()
		if (categoryId) {
			finalSearch = query(
				collection(db, 'productos'),
				where('category', '==', categoryId)
			);
		} else {
			finalSearch = collection(db, 'productos');
		}
		getDocs(finalSearch)
			.then((snapshot) => {
				setProducts(
					snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				);
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			})
			.finally(() => setLoading(false));
	}, [categoryId]);

	return (
		<Box sx={{ minHeight: '100vh' }}>
			{stockMaximo && (
				<Box sx={{ position: 'sticky', top: '0' }} justifyContent={'center'}>
					<Collapse in={stockMaximo}>
						<Alert
							severity="warning"
							action={
								<IconButton
									aria-label="close"
									color="inherit"
									size="small"
									onClick={() => {
										setStockMaximo(false);
									}}>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							sx={{ mb: 2 }}>
							Exedió el Stock máximo
						</Alert>
					</Collapse>
				</Box>
			)}
			<ItemList
				data={!searchValue.length >= 1 ? products : searchedProducts}
				error={error}
				loading={loading}
			/>
		</Box>
	);
};

export { ItemListContainer };
