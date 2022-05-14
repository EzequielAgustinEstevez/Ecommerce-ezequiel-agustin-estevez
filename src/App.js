import { NavBar } from './components/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer mensaje="Hola" />
		</>
	);
}

export default App;
