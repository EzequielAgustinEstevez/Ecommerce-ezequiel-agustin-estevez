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
import Link from '@mui/material/Link';

export default function Item(props) {
	const [itemCount, setItemCount] = useState(props.initial);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<Link href="/">
				<CardMedia
					component="img"
					height="200px"
					image={props.itemImage}
					alt="cat"
				/>
			</Link>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					<Link href="/" underline="hover">
						{props.itemTitle}
					</Link>
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					magnam tempore nihil minima porro in voluptatem eligendi adipisci.
					<Button href="/" size="small">
						Leer Más
					</Button>
				</Typography>
				<Box
					sx={{ p: 2, border: '1px dashed grey' }}
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Typography variant="h4">${props.price}</Typography>
				</Box>
			</CardContent>
			<CardActions sx={{ justifyContent: 'space-between' }}>
				<ButtonGroup variant="contained" color="primary">
					<Button
						disabled={itemCount === 0}
						onClick={() => setItemCount(itemCount - 1)}>
						-
					</Button>
					<Typography variant="h6" color="initial" align="center" width={'3em'}>
						{itemCount}
					</Typography>
					<Button
						disabled={props.itemStock - 1 < itemCount}
						onClick={() => setItemCount(itemCount + 1)}>
						+
					</Button>
				</ButtonGroup>
				<Typography
					sx={{ color: '#c3c3db' }}
					variant="p"
					color="initial"
					align="inherit"
					noWrap>
					Stock: {props.itemStock}
				</Typography>
				<Box display="flex" justifyContent="center" alignItems="center">
					<Button
						variant="contained"
						onClick={() => {
							props.onAdd(itemCount, props.itemTitle);
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
