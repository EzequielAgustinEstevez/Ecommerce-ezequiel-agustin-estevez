import './App.css';
import { NavBar } from './components/Nav/NavBar';
import { ItemListContainer } from './components/Listado/ItemListContainer';
import { EcommerceContex } from './context/GeneralContext';
import { ItemDetailContainer } from './components/Detalle/ItemDetailContainer.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
						<Route path="*" element={'RUTA NO EXISTE 404'} />
						<Route path="/Item/:itemId" element={<ItemDetailContainer />} />
						<Route
							path="/category/:categoryId"
							element={<ItemListContainer />}
						/>
					</Routes>
				</BrowserRouter>
			</EcommerceContex>
		</ThemeProvider>
	);
}

export default App;
