// import React from 'react';
// import { ItemListContainer } from '../components/ItemListContainer';

// const SearchContext = React.createContext();

// function SearchProvider(props) {
// 	const { products } = React.useContext(ItemListContainer);
// 	const [searchValue, setSearchValue] = React.useState('');
// 	var searchedProducts = [];

// 	if (!searchValue.length >= 1) {
// 		searchedProducts = products;
// 	} else {
// 		searchedProducts = products.filter((products) => {
// 			const productsTitle = products.name.toLowerCase();
// 			const searchTitle = searchValue.toLowerCase();
// 			return productsTitle.includes(searchTitle);
// 		});
// 	}

// 	return (
// 		<SearchProvider.Provider
// 			value={{
// 				searchValue,
// 				setSearchValue,
// 				searchedProducts,
// 			}}>
// 			{props.children}
// 		</SearchProvider.Provider>
// 	);
// }
// export { SearchProvider, SearchContext };
