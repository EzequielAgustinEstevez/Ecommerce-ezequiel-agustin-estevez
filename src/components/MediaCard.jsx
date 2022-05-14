import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

export default function MediaCard(props) {
	const [itemCount, setItemCount] = useState(props.initial);
	function Sumador() {
		setItemCount(itemCount + 1);
	}
	function Restador() {
		setItemCount(itemCount - 1);
	}
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="200px"
				image={props.itemImage}
				alt="cat"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.itemTitle}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'space-between' }}>
				<ButtonGroup variant="contained" color="primary" aria-label="">
					<Button disabled={itemCount === 0} onClick={Restador}>
						-
					</Button>
					<Typography variant="h6" color="initial" align="center" width={'3em'}>
						{itemCount}
					</Typography>
					<Button disabled={props.itemStock - 1 < itemCount} onClick={Sumador}>
						+
					</Button>
				</ButtonGroup>
				<Box display="flex" justifyContent="center" alignItems="center">
					<Button
						onClick={() => {
							props.onAdd(itemCount, props.itemTitle);
							setItemCount(0);
						}}
						disabled={itemCount === 0}
						size="small">
						<AddShoppingCartRoundedIcon />
						Comprar
					</Button>
				</Box>
			</CardActions>
		</Card>
	);
}
