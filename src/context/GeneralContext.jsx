import React, { useState } from 'react';
import Product from '../db/db';

const GeneralContext = React.createContext();

function EcommerceContex(props) {
	/* CONTADOR CARRITO */
	const [itemCarrito, setitemCarrito] = useState(0);

	/* BUSCADOR */
	const [searchValue, setSearchValue] = React.useState('');
	var searchedProducts = [];
	if (!searchValue.length >= 1) {
		searchedProducts = Product;
	} else {
		searchedProducts = Product.filter((product) => {
			const productsTitle = product.name.toLowerCase();
			const searchTitle = searchValue.toLowerCase();
			return productsTitle.includes(searchTitle);
		});
	}

	return (
		<GeneralContext.Provider
			/* ENVIOS */
			value={{
				itemCarrito,
				setitemCarrito,
				searchValue,
				setSearchValue,
				searchedProducts,
			}}>
			{props.children}
		</GeneralContext.Provider>
	);
}

export { GeneralContext, EcommerceContex };
