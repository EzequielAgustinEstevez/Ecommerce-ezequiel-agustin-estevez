import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const GeneralContext = React.createContext();

function EcommerceContex(props) {
	/* //? Hook personalzado para consumir LocalStorage */
	const {
		item: carrito,
		saveItem,
		//loading,
		//error,
	} = useLocalStorage('CARRITO_V1', []);

	/* BASE DE DATOS FIREBASE */
	const [Product, setProduct] = useState([]);
	useEffect(() => {
		const db = getFirestore();
		const getProduct = collection(db, 'productos');
		getDocs(getProduct)
			.then((snapshot) => {
				setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			})
			.catch((err) => {
				console.log(err);
			});
		TotalEnCarrito();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [carrito]);

	/* -----CARRITO----- */
	const [stockMaximo, setStockMaximo] = useState(false);

	/* _CONTADOR CARRITO */
	const [contadorCarrito, setContadorCarrito] = useState(0);
	const TotalEnCarrito = () => {
		setContadorCarrito(
			carrito.reduce((acc, item) => {
				return (acc = acc + item.cantidad);
			}, 0)
		);
	};

	/* _BUSCAR EN CARRITO */
	const BuscadorEnCarrito = (id) => {
		return carrito.some((item) => item.id === id);
	};

	/* _AGREGAR ITEM	 */
	const agregarItem = (idClikeado, cantidad) => {
		let nuevoItem = Product.find((producto) => producto.id === idClikeado);

		//TODO Optimizar codigo con "reduce"
		const SumarItemEnCarrito = (id, nuevaCantidad) => {
			let nuevoCarrito = carrito;
			let indexASumar = nuevoCarrito.findIndex((item) => item.id === id);
			let itemASumar = nuevoCarrito[indexASumar];
			if (itemASumar.cantidad + nuevaCantidad <= itemASumar.stock) {
				itemASumar.cantidad += nuevaCantidad;
				saveItem(nuevoCarrito);
				setStockMaximo(false);
			} else {
				setStockMaximo(true);
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

	/* _ELIMINAR TODOS LOS ITEMS ->Eliminar Todos */
	const eliminarTodosLosItems = () => {
		saveItem([]);
	};

	/* _ELIMINAR ITEM ->Tacho */
	const eliminarItem = (id) => {
		//* quitamos el item buscando por id con filter()
		let nuevoCarrito = carrito.filter((item) => item.id !== id);
		saveItem(nuevoCarrito);
	};

	/* _RESTAR ITEM ->Restar 1 item del carrito*/
	const quitarItem = (idClikeado, cantidad) => {
		if (cantidad <= 1) {
			eliminarItem(idClikeado);
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
				BuscadorEnCarrito,
				stockMaximo,
				setStockMaximo,
			}}>
			{props.children}
		</GeneralContext.Provider>
	);
}

export { GeneralContext, EcommerceContex };
