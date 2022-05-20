import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';

export default function Item(props) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			{/* IMAGEN */}
			<Link to={`/Item/${props.id}`}>
				<CardMedia
					component="img"
					height="200px"
					image={props.itemImage}
					alt="cat"
				/>
			</Link>
			{/* CONTENIDO */}
			<CardContent>
				{/* Titulo */}
				<Typography gutterBottom variant="h5" component="div">
					<Link to={`/Item/${props.id}`} underline="hover">
						{props.itemTitle}
					</Link>
				</Typography>
				{/* Texto */}
				<Typography variant="body2" color="text.secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					magnam tempore nihil minima porro in voluptatem eligendi adipisci.
					<Link to={`/Item/${props.id}`}>
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
			<ItemCount itemStock={props.itemStock} initial={props.initial} />
		</Card>
	);
}