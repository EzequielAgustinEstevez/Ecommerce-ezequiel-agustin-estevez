import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
	Button,
	ButtonGroup,
	Container,
	TextField,
	Typography,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import {
	addDoc,
	collection,
	getFirestore,
	Timestamp,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GeneralContext } from '../../context/GeneralContext';
import FormCart from './FormCart/index';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#3f8db5',
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 16,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function Cart() {
	const {
		agregarItem,
		eliminarTodosLosItems,
		quitarItem,
		eliminarItem,
		carrito: productos,
		contadorCarrito,
		total,
		setStockMaximo,
	} = useContext(GeneralContext);

	const [orderSend, setOrderSend] = useState(false);

	const [registro, setRegistro] = useState([]);

	const [orden, setOrden] = useState({});

	const [saveOrder, setSaveOrder] = useState(false);
	const RealizarCompra = () => {
		setOrden({
			buyer: registro,
			items: productos,
			total: total(),
			time: Timestamp.now(),
		});
		setSaveOrder(true);
	};

	const [descuento, setDescuento] = useState('');

	useEffect(() => {
		if (saveOrder) {
			const db = getFirestore();
			const ordersCollection = collection(db, 'orders');
			addDoc(ordersCollection, orden)
				.then(({ id }) => {
					setOrden(id);
					setOrderSend(true);
					eliminarTodosLosItems();
				})
				.catch((err) => {
					console.log(err);
				});
		}
		setStockMaximo(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [saveOrder]);

	return (
		<Container sx={{ minHeight: '100vh' }}>
			{/* Alert Exito */}
			{orderSend && (
				<Alert severity="success" sx={{ marginTop: '2rem' }}>
					<AlertTitle>😺 Exito!</AlertTitle>
					{`Orden N° ${orden} realizada con exito. Pronto te contactaremos para realizar el envio. MUCHAS GRACIAS!`}
				</Alert>
			)}
			{/* IF Productos en carrito */}
			{productos.length > 0 ? (
				<Box minHeight={'100vh'} p="5rem">
					{/* Tabla */}
					<TableContainer component={Paper}>
						<Table aria-label="customized table">
							{/* Cabecera */}
							<TableHead>
								<TableRow>
									<StyledTableCell>Producto</StyledTableCell>
									<StyledTableCell align="center">Precio</StyledTableCell>
									<StyledTableCell align="center">Total</StyledTableCell>
									<StyledTableCell align="center">Disponibles</StyledTableCell>
									<StyledTableCell align="center">
										Seleccionados
									</StyledTableCell>
								</TableRow>
							</TableHead>
							{/* Lista */}
							<TableBody>
								{productos.map((producto) => (
									<StyledTableRow key={producto.id}>
										<StyledTableCell component="th" scope="row">
											<Box
												display="flex"
												alignItems="center"
												justifyContent="space-between">
												<Link to={`/item/${producto.id}`}>
													<img width={50} src={`${producto.image}`} alt="" />
												</Link>
												{producto.name}
											</Box>
										</StyledTableCell>
										<StyledTableCell align="center">
											${producto.price}
										</StyledTableCell>
										<StyledTableCell align="center">
											${parseFloat(producto.price * producto.cantidad)}
										</StyledTableCell>
										<StyledTableCell align="center">
											{producto.stock}
										</StyledTableCell>
										<StyledTableCell align="center">
											<ButtonGroup variant="contained" color="primary">
												{/* Boton Restar */}
												<Button
													onClick={() =>
														quitarItem(producto.id, producto.cantidad)
													}>
													-
												</Button>
												{/* Cantidad */}
												<Typography
													variant="h6"
													color="initial"
													align="center"
													width={'3em'}>
													{producto.cantidad}
												</Typography>
												{/* Boton Sumar */}
												<Button onClick={() => agregarItem(producto.id, 1)}>
													+
												</Button>
												<Button
													onClick={() => eliminarItem(producto.id)}
													color="inherit">
													<DeleteForeverIcon />
												</Button>
											</ButtonGroup>
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					{/* Formulario */}
					<Box p={4}>
						<FormCart setRegistro={setRegistro} />
					</Box>
					{/* Contador y botones */}
					<Container sx={{ padding: '2rem 0' }}>
						<Box
							display="flex"
							justifyContent="space-between"
							flexDirection={'row'}>
							<Box>
								<Typography variant="h6" color="initial">
									Productos: {contadorCarrito}
								</Typography>
							</Box>
							<Box>
								<Typography variant="h6" color="initial">
									Total: $
									{descuento === 'GatitoFeliz'
										? total() - total() * 0.15
										: total()}
								</Typography>
							</Box>
						</Box>
						<Box display="flex" justifyContent="space-between" paddingTop={3}>
							<Box>
								<TextField
									id="outlined-helperText"
									label="Ingrese su cupón"
									defaultValue="GatitoFeliz"
									helperText="GatitoFeliz dara 15%de descuento"
									onKeyPress={(e) => {
										if (e.key === 'Enter') {
											setDescuento(e.target.value);
										}
									}}
								/>
							</Box>
							<div>
								<Box>
									<Button
										variant="contained"
										color="success"
										onClick={RealizarCompra}
										disabled={total() === 0 || registro.length === 0}>
										<ShoppingCartIcon />
										<Typography fontSize={27}>COMPRAR</Typography>
									</Button>
								</Box>
								<Box
									display={'flex'}
									alignContent="center"
									justifyContent={'center'}
									paddingTop={2}>
									<Button
										onClick={() => eliminarTodosLosItems()}
										variant="contained"
										color="error">
										<ClearIcon />
										Eliminar carrito
									</Button>
								</Box>
							</div>
						</Box>
					</Container>
				</Box>
			) : (
				/* IF Sin productos en el carrito */
				<Box
					display="flex"
					justifyContent="center"
					padding={5}
					flexDirection="column"
					alignItems={'center'}>
					<Box>
						<Typography variant="h6" color="initial">
							No hay productos en el carrito
						</Typography>
					</Box>
					<Box p={3}>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<Button variant="contained" color="primary">
								<ArrowBackIcon />
								<Typography fontSize={17}>Volver a la tienda</Typography>
							</Button>
						</Link>
					</Box>
				</Box>
			)}
		</Container>
	);
}
export { Cart };
