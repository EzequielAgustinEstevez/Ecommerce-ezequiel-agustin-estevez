import Box from '@mui/material/Box';
import { ItemCount } from '../Listado/ItemCount';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { Container, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React, { useContext, useState } from 'react';
import { GeneralContext } from '../../context/GeneralContext';

const ItemDetail = (props) => {
	const { itemCarrito, setitemCarrito } = useContext(GeneralContext);
	const [tenemosItem, setTenemosItem] = useState(0);

	const onAdd = (sumaCarrito) => {
		setitemCarrito(sumaCarrito + itemCarrito);
		setTenemosItem(tenemosItem + 1);
	};

	return (
		<Container>
			<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
				<h1>{props.name}</h1>
			</Box>
			<Box sx={{ p: 2, border: '1px dashed grey' }} margin={4}>
				<Box display={'flex'} paddingY={3}>
					<CardMedia
						component="img"
						image={props.image}
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
							voluptatum quos iste veniam aperiam quaerat iure ab. Illum animi
							sequi modi sunt ut quisquams alias autem repellendus quaerat illum
							voluptatibus, itaque facilis excepturi quia quam iure explicabo
							cupiditate consequatur dicta temporibus. Quod aspernatur sed
							nesciunt repellat deleniti ullam fugit recusandae, dicta
							necessitatibus repellendus vero accusamus nobis magnam quia!
						</Typography>
						<ItemCount
							itemStock={props.stock}
							initial={props.initial}
							onAdd={onAdd}
						/>
						<Box display={'flex'} justifyContent={'center'} paddingY={2}>
							{tenemosItem > 0 && (
								<Link to={'/cart'} style={{ textDecoration: 'none' }}>
									<Button
										variant="contained"
										color="primary"
										disabled={props.stock === 0}>
										<ShoppingBasketIcon />
										<Typography paddingX={1}>Comprar</Typography>
									</Button>
								</Link>
							)}
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
export { ItemDetail };
