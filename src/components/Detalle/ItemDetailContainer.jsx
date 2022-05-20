import React from 'react';
import { GeneralContext } from '../../context/GeneralContext';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { ItemCount } from '../Listado/ItemCount';
import { useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Api from '../../db/api';

const ItemDetailContainer = (props) => {
	const { itemId } = useParams();
	const { error, loading, products } = React.useContext(GeneralContext);
	const idSearch = products.findIndex((s) => s.id === itemId);

	return (
		<>
			{error && <h1>Error</h1>}
			{loading && (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			)}
			<Container>
				<Box display="flex" justifyContent="center" alignItems="center">
					<h1>{products[idSearch].name}</h1>
				</Box>

				<CardMedia component="img" image={products[idSearch].image} alt="cat" />
				<Box
					container
					spacing={1}
					justifyContent="center"
					alignItems="center"
					padding={2}
					alignContent="center">
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
						debitis deleniti, quasi nisi aliquid non culpa voluptatum quos iste
						veniam aperiam quaerat iure ab. Illum animi sequi modi sunt ut
						quisquams alias autem repellendus quaerat illum voluptatibus, itaque
						facilis excepturi quia quam iure explicabo cupiditate consequatur
						dicta temporibus. Quod aspernatur sed nesciunt repellat deleniti
						ullam fugit recusandae, dicta necessitatibus repellendus vero
						accusamus nobis magnam quia!
					</Typography>
					<ItemCount
						itemStock={products[idSearch].stock}
						initial={products[idSearch].initial}
					/>
				</Box>
			</Container>
			<Api />
		</>
	);
};
export { ItemDetailContainer };
