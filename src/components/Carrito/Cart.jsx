import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, ButtonGroup, Button, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';
import { GeneralContext } from '../../context/GeneralContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
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
	} = useContext(GeneralContext);

	return (
		<Container sx={{ minHeight: '100vh' }}>
			{productos.length > 0 ? (
				<Box minHeight={'100vh'} p="5rem">
					<TableContainer component={Paper}>
						<Table aria-label="customized table">
							{/* Cabecera */}
							<TableHead>
								<TableRow>
									<StyledTableCell>Producto</StyledTableCell>
									<StyledTableCell align="center">
										Precio Unitario
									</StyledTableCell>
									<StyledTableCell align="center">
										Precio Acumulado
									</StyledTableCell>
									<StyledTableCell align="center">Stock</StyledTableCell>
									<StyledTableCell align="center">Cantidad</StyledTableCell>
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
					<Container sx={{ padding: '2rem 0' }}>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between">
							<Box>
								<Typography variant="h6" color="initial">
									Productos: {contadorCarrito}
								</Typography>
							</Box>
							<Box>
								<Typography variant="h6" color="initial">
									Total: $
									{productos.reduce((total, producto) => {
										return total + producto.price * producto.cantidad;
									}, 0)}
								</Typography>
							</Box>
							<Box
								display={'flex'}
								alignContent="center"
								justifyContent={'center'}>
								<Button
									onClick={() => eliminarTodosLosItems()}
									variant="contained"
									color="error">
									<ClearIcon />
									Eliminar carrito
								</Button>
							</Box>
						</Box>
						<Box display="flex" justifyContent="center" padding={5}>
							<Button variant="contained" color="success">
								<ShoppingCartIcon />
								<Typography fontSize={27}>COMPRAR</Typography>
							</Button>
						</Box>
					</Container>
				</Box>
			) : (
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
