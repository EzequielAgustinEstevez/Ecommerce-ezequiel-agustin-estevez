import React from 'react';
import { Grid } from '@mui/material';
import MediaCard from './MediaCard';

const products = [
	{
		nombre: 'Pantalonsito',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sGPKo1idFz3aOk59XOAnWAHaFj%26pid%3DApi&f=1',
		stock: 5,
		initial: 1,
	},
	{
		nombre: 'Gorrito',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F893497-cats-winter-hat-snout-animals.jpg&f=1&nofb=1',
		stock: 5,
		initial: 0,
	},
	{
		nombre: 'Botitas',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn7.dissolve.com%2Fp%2FD254_10_908%2FD254_10_908_0004_600.jpg&f=1&nofb=1',
		stock: 5,
		initial: 0,
	},
	{
		nombre: 'Chalequito',
		image:
			'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpetslady.com%2Fsites%2Fdefault%2Ffiles%2Finline-images%2F71%252B51FaH3tL._SL1200_.jpg&f=1&nofb=1',
		stock: 5,
		initial: 0,
	},
];
const ItemListContainer = (props) => {
	var itemsEnCarrito = 0;
	const onAdd = (items, itemTitle) => {
		itemsEnCarrito = itemsEnCarrito + items;
		alert(
			`Se agregó al carrito ${itemTitle} ${items} - Total en carrito: ${itemsEnCarrito} productos`
		);
		//TODO a travez del Context se enviaria la sumatoria de items para agregarlo al carrito y su contador
	};
	return (
		<Grid
			container
			spacing={1}
			justifyContent="center"
			alignItems="center"
			padding={2}
			alignContent="center">
			{products.map((product) => (
				<Grid item key={product.nombre}>
					<MediaCard
						itemTitle={product.nombre}
						itemImage={product.image}
						itemStock={product.stock}
						initial={product.initial}
						onAdd={onAdd}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export { ItemListContainer };
