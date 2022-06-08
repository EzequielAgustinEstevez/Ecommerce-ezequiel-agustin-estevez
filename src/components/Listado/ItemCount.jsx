import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const ItemCount = (props) => {
	const [itemCount, setItemCount] = useState(props.initial);

	return (
		<CardActions sx={{ justifyContent: 'space-between' }}>
			<ButtonGroup variant="contained" color="primary">
				{/* Boton Restar */}
				<Button
					disabled={itemCount === 0}
					onClick={() => setItemCount(itemCount - 1)}>
					-
				</Button>
				{/* Cantidad */}
				<Typography variant="h6" color="initial" align="center" width={'3em'}>
					{itemCount}
				</Typography>
				{/* Boton Sumar */}

				<Button
					disabled={props.itemStock - 1 < itemCount}
					onClick={() => setItemCount(itemCount + 1)}>
					+
				</Button>
			</ButtonGroup>
			{/* Stock */}
			<Typography
				sx={{ color: '#c3c3db' }}
				variant="p"
				color="initial"
				align="center">
				Stock: {props.itemSeleccionado}/{props.itemStock}
			</Typography>
			{/* Boton Agregar */}
			<Box display="flex" justifyContent="center" alignItems="center">
				<Button
					variant="contained"
					onClick={() => {
						props.onAdd(itemCount);
					}}
					disabled={itemCount === 0 || props.itemSeleccionado === 0}
					size="small">
					<AddShoppingCartRoundedIcon />
					Agregar
				</Button>
			</Box>
		</CardActions>
	);
};
export { ItemCount };
