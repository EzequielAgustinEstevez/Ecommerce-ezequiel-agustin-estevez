import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = (props) => {
	const { itemId } = useParams();

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	/* const idSearch = new Promise((resolve) => {
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
	}, [itemId]); */

	useEffect(() => {
		//db
		//productos
		//QfBbs2ixVDAz89Jc5HAZ
		const db = getFirestore();

		const finalSearch = doc(db, 'productos', itemId);

		getDoc(finalSearch)
			.then((snapshot) => {
				if (snapshot.exists()) {
					setProducts({ id: snapshot.id, ...snapshot.data() });
				} else {
					setError(true);
				}
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			})
			.finally(() => setLoading(false));
	}, [itemId]);

	return (
		<>
			<Box sx={{ minHeight: '90vh' }}>
				{loading ? (
					<Box sx={{ width: '100%' }}>
						<LinearProgress />
					</Box>
				) : !error ? (
					<ItemDetail
						id={products.id}
						name={products.name}
						image={products.image}
						stock={Number(products.stock)}
						price={Number(products.price)}
						initial={Number(products.initial)}
					/>
				) : (
					<Box
						display={'flex'}
						justifyContent={'center'}
						flexDirection={'column'}
						alignItems={'center'}>
						<Box>
							<Typography align="center" p={3} variant="h5">
								Este producto no existe
							</Typography>
						</Box>
						<Box p={3}>
							<Link to="/" style={{ textDecoration: 'none' }}>
								<Button variant="contained" color="primary">
									<ArrowBackIcon />
									<Typography fontSize={17}>Volver a la tienda</Typography>
								</Button>
							</Link>
						</Box>
					</Box>
				)}
			</Box>
		</>
	);
};
export { ItemDetailContainer };
