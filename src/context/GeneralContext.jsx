import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import Product from '../db/db';

const GeneralContext = React.createContext();

function EcommerceContex(props) {
	/* //? Hook personalzado para consumir LocalStorage */
	const {
		item: carrito,
		saveItem,
		//loading,
		//error,
	} = useLocalStorage('CARRITO_V1', []);

	/* -----CARRITO----- */

	/* _CONTADOR CARRITO */
	const [contadorCarrito, setContadorCarrito] = useState(0);
	const TotalEnCarrito = () => {
		setContadorCarrito(
			carrito.reduce((acc, item) => {
				return (acc = acc + item.cantidad);
			}, 0)
		);
	};
	useEffect(() => {
		TotalEnCarrito();
	}, [carrito]);

	/* _AGREGAR ITEM	 */
	const agregarItem = (idClikeado, cantidad) => {
		let nuevoItem = Product.find((producto) => producto.id === idClikeado);

		const BuscadorEnCarrito = (id) => {
			return carrito.some((item) => item.id === id);
		};

		//TODO Optimizar codigo con "reduce"
		const SumarItemEnCarrito = (id, nuevaCantidad) => {
			let nuevoCarrito = carrito;
			let indexASumar = nuevoCarrito.findIndex((item) => item.id === id);
			let itemASumar = nuevoCarrito[indexASumar];
			if (itemASumar.cantidad + nuevaCantidad <= itemASumar.stock) {
				itemASumar.cantidad += nuevaCantidad;
				saveItem(nuevoCarrito);
			} else {
				alert('Exedio el maximo de productos en Stock');
			}
		};
		/* //? Verifica si existe en el carrito para agregarlo o sumarle al existente */
		if (!BuscadorEnCarrito(idClikeado)) {
			nuevoItem['cantidad'] = cantidad;
			saveItem(carrito.concat(nuevoItem));
			TotalEnCarrito();
		} else {
			SumarItemEnCarrito(idClikeado, cantidad);
			TotalEnCarrito();
		}
	};

	/* _ELIMINAR TODOS LOS ITEMS */
	const eliminarTodosLosItems = () => {
		saveItem([]);
	};

	/* _ELIMINAR ITEM */
	const eliminarItem = (id) => {
		//* quitamos el item buscando por id con filter()
		let nuevoCarrito = carrito.filter((item) => item.id !== id);
		saveItem(nuevoCarrito);
	};

	/* _QUITAR ITEM */
	const quitarItem = (idClikeado, cantidad) => {
		if (cantidad <= 1) {
			eliminarItem(idClikeado);

			console.log('Eliminado');
		} else {
			let nuevoCarrito = [];
			nuevoCarrito = carrito.reduce((acc, item) => {
				if (idClikeado === item.id) {
					return acc.concat({ ...item, cantidad: item.cantidad - 1 });
				} else {
					return acc.concat(item);
				}
			}, []);
			saveItem(nuevoCarrito);
			console.log('Quitado');
		}
	};
	/* _Total Compra */
	const total = () => {
		return carrito.reduce((acc, item) => {
			return acc + item.price * item.cantidad;
		}, 0);
	};

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
				contadorCarrito,
				searchValue,
				setSearchValue,
				searchedProducts,
				agregarItem,
				quitarItem,
				eliminarItem,
				eliminarTodosLosItems,
				carrito,
				total,
			}}>
			{props.children}
		</GeneralContext.Provider>
	);
}

export { GeneralContext, EcommerceContex };
