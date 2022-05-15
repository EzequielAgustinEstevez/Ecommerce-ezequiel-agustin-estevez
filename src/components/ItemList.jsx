import React from 'react';
import { Grid } from '@mui/material';
import Item from './Item';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ItemList = (props) => {
	var itemsEnCarrito = 0;
	const onAdd = (items, itemTitle) => {
		itemsEnCarrito = itemsEnCarrito + items;
		alert(
			`Se agregó al carrito ${itemTitle} ${items} - Total en carrito: ${itemsEnCarrito} productos`
		);
		//TODO a travez del Context se enviaria la sumatoria de items para agregarlo al carrito y su contador
	};
	return [
		<Box sx={{ width: '100%' }}>
			{props.error && <p>Error: {props.error}</p>}
			{props.cargando && (
				<Box>
					<LinearProgress />
				</Box>
			)}
		</Box>,
		<Grid
			container
			spacing={1}
			justifyContent="center"
			alignItems="center"
			padding={2}
			alignContent="center">
			{props.data.map((data) => (
				<Grid item key={data.name}>
					<Item
						itemTitle={data.name}
						itemImage={data.image}
						itemStock={data.stock}
						initial={data.initial}
						onAdd={onAdd}
					/>
				</Grid>
			))}
		</Grid>,
	];
};

export { ItemList };
