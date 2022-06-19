import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/Carrito/Cart';
import { ItemDetailContainer } from './components/Detalle/ItemDetailContainer.jsx';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/Listado/ItemListContainer';
import { NavBar } from './components/Nav/NavBar';
import { EcommerceContex } from './context/GeneralContext';
import { Err404 } from './components/Error/404';

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
						<Route path="/" element={<ItemListContainer />} />
						<Route
							path="/category/:categoryId"
							element={<ItemListContainer />}
						/>
						<Route path="/item/:itemId" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/*" element={<Err404 />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</EcommerceContex>
		</ThemeProvider>
	);
}

export default App;
