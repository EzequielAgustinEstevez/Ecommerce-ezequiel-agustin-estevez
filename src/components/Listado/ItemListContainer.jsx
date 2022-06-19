import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GeneralContext } from '../../context/GeneralContext';
import { productosDB } from '../../db/FirebaseDbControl';
import { ItemList } from './ItemList';

const ItemListContainer = () => {
	const { categoryId } = useParams();
	const { searchValue, searchedProducts, stockMaximo, setStockMaximo } =
		useContext(GeneralContext);

	/* ESTADOS DB  */
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [products, setProducts] = useState([]);

	const productosDBCapturados = async () => {
		setLoading(true);
		const productosCapturados = await productosDB(categoryId);
		setProducts(productosCapturados);
		setLoading(false);
		if (productosCapturados.length === 0) {
			setError(true);
		} else {
			setError(false);
		}
	};

	useEffect(() => {
		productosDBCapturados(categoryId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
