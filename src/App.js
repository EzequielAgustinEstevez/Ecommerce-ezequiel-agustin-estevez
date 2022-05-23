import './App.css';
import { NavBar } from './components/Nav/NavBar';
import { ItemListContainer } from './components/Listado/ItemListContainer';
import { EcommerceContex } from './context/GeneralContext';
import { ItemDetailContainer } from './components/Detalle/ItemDetailContainer.jsx';
import { Cateory } from './components/Categorias/Category';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

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
						<Route path="*" element={'RUTA NO EXISTE 404'} />
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/Item/:itemId" element={<ItemDetailContainer />} />
						<Route path="/category/:categoryId" element={<Cateory />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</EcommerceContex>
		</ThemeProvider>
	);
}

export default App;
