import './App.css';
import { NavBar } from './components/Nav/NavBar';
import { ItemListContainer } from './components/Listado/ItemListContainer';
import { EcommerceContex } from './context/GeneralContext';
import { ItemDetailContainer } from './components/Detalle/ItemDetailContainer.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Cart } from './components/Carrito/Cart';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#3f8db5',
		},
		secondary: {
			main: '#983a5c',
		},
		error: {
			main: '#f44336',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<EcommerceContex>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/*" element={'RUTA NO EXISTE 404'} />
						<Route path="/" element={<ItemListContainer />} />
						<Route
							path="/category/:categoryId"
							element={<ItemListContainer />}
						/>
						<Route path="/item/:itemId" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</EcommerceContex>
		</ThemeProvider>
	);
}

export default App;
