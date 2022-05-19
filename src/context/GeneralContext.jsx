import React, { useState, useEffect } from 'react';
const GeneralContext = React.createContext();
/* DB */
const product = [
	{
		name: 'Pantaloncito',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sGPKo1idFz3aOk59XOAnWAHaFj%26pid%3DApi&f=1',
		stock: 5,
		initial: 1,
		price: '2.000',
	},
	{
		name: 'Gorrito',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F893497-cats-winter-hat-snout-animals.jpg&f=1&nofb=1',
		stock: 10,
		initial: 0,
		price: '800',
	},
	{
		name: 'Botitas',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn7.dissolve.com%2Fp%2FD254_10_908%2FD254_10_908_0004_600.jpg&f=1&nofb=1',
		stock: 22,
		initial: 0,
		price: '1.500',
	},
	{
		name: 'Chalequito',
		image:
			'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpetslady.com%2Fsites%2Fdefault%2Ffiles%2Finline-images%2F71%252B51FaH3tL._SL1200_.jpg&f=1&nofb=1',
		stock: 0,
		initial: 0,
		price: '5.000',
	},
];

function EcommerceContex(props) {
	/* CONTADOR CARRITO */
	const [itemCarrito, setitemCarrito] = useState(0);
	/* BUSCADOR */
	const [searchValue, setSearchValue] = React.useState('');
	/* BASE DE DATOS  */
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [products, setProducts] = React.useState([]);

	var searchedProducts = [];
	/* _BUSCADOR */
	if (!searchValue.length >= 1) {
		searchedProducts = product;
	} else {
		searchedProducts = product.filter((product) => {
			const productsTitle = product.name.toLowerCase();
			const searchTitle = searchValue.toLowerCase();
			return productsTitle.includes(searchTitle);
		});
	}

	/* _BASE DE DATOS  */
	const fetchProductos = async () => {
		try {
			const productPromise = await new Promise((resolve) => {
				setTimeout(() => {
					resolve(setProducts(product));
				}, 2000);
			});
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
			setError(true);
		}
	};

	useEffect(() => {
		fetchProductos();
		// eslint-disable-next-line
	}, []);

	return (
		<GeneralContext.Provider
			/* ENVIOS */
			value={{
				itemCarrito,
				setitemCarrito,
				searchValue,
				setSearchValue,
				searchedProducts,
				loading,
				error,
				products,
			}}>
			{props.children}
		</GeneralContext.Provider>
	);
}

export { GeneralContext, EcommerceContex };
