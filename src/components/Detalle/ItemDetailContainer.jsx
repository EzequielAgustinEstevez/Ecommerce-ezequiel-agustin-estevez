import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { ItemCount } from '../Listado/ItemCount';
import { Link, useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { Container, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import product from '../../db/db';

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
			<Box sx={{ minHeight: '80vh' }}>
				{error && <h1>Error</h1>}
				{loading ? (
					<Box sx={{ width: '100%' }}>
						<LinearProgress />
					</Box>
				) : (
					<Container>
						<Box
							display={'flex'}
							justifyContent={'center'}
							alignItems={'center'}>
							<h1>{products.name}</h1>
						</Box>
						<Box sx={{ p: 2, border: '1px dashed grey' }} margin={4}>
							<Box display={'flex'} paddingY={3}>
								<CardMedia
									component="img"
									image={products.image}
									alt="cat"
									sx={{ maxHeight: '30rem' }}
								/>
								<Box
									container
									spacing={1}
									justifyContent="center"
									alignItems="center"
									padding={2}
									alignContent="center">
									<Typography variant="body2" color="text.secondary">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Asperiores debitis deleniti, quasi nisi aliquid non culpa
										voluptatum quos iste veniam aperiam quaerat iure ab. Illum
										animi sequi modi sunt ut quisquams alias autem repellendus
										quaerat illum voluptatibus, itaque facilis excepturi quia
										quam iure explicabo cupiditate consequatur dicta temporibus.
										Quod aspernatur sed nesciunt repellat deleniti ullam fugit
										recusandae, dicta necessitatibus repellendus vero accusamus
										nobis magnam quia!
									</Typography>
									<ItemCount
										itemStock={products.stock}
										initial={products.initial}
									/>
									<Box display={'flex'} justifyContent={'center'} paddingY={2}>
										<Link to={'/cart'} style={{ textDecoration: 'none' }}>
											<Button variant="contained" color="primary">
												<ShoppingBasketIcon />
												<Typography paddingX={1}>Comprar</Typography>
											</Button>
										</Link>
									</Box>
								</Box>
							</Box>
						</Box>
					</Container>
				)}
			</Box>
		</>
	);
};
export { ItemDetailContainer };
