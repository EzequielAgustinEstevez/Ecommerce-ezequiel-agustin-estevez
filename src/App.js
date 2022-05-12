import { NavBar } from './components/NavBar';
import './App.css';
import { ItemListContianer } from './components/ItemListContianer';

function App() {
	return (
		<>
			<NavBar />
			<ItemListContianer mensaje="Hola" />
		</>
	);
}

export default App;
