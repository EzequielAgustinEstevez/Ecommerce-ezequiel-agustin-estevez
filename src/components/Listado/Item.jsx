import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { GeneralContext } from '../../context/GeneralContext';

export default function Item(props) {
	const { itemCarrito, setitemCarrito } = React.useContext(GeneralContext);

	const onAdd = (sumaCarrito) => {
		setitemCarrito(sumaCarrito + itemCarrito);
	};
	return (
		<Card sx={{ maxWidth: 345 }}>
			{/* IMAGEN */}
			<Link to={`/item/${props.id}`} style={{ textDecoration: 'none' }}>
				<CardMedia
					component="img"
					height="300px"
					image={props.itemImage}
					alt="cat"
				/>
			</Link>
			{/* CONTENIDO */}
			<CardContent>
				{/* Titulo */}
				<Typography gutterBottom variant="h5" component="div">
					<Link to={`/item/${props.id}`} style={{ textDecoration: 'none' }}>
						{props.itemTitle}
					</Link>
				</Typography>
				{/* Texto */}
				<Typography variant="body2" color="text.secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					magnam tempore nihil minima porro in voluptatem eligendi adipisci.
					<Link to={`/item/${props.id}`} style={{ textDecoration: 'none' }}>
						<Button size="small">Leer Más</Button>
					</Link>
				</Typography>
				{/* Precio */}
				<Box
					sx={{ p: 2, border: '1px dashed grey' }}
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Typography variant="h4">${props.price}</Typography>
				</Box>
			</CardContent>
			{/* ITEM COUNT */}
			<ItemCount
				itemStock={props.itemStock}
				initial={props.initial}
				onAdd={onAdd}
			/>
		</Card>
	);
}
