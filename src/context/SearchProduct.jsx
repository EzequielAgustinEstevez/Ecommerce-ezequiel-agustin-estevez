// import React from 'react';

// const SearchContext = React.createContext();

// function SearchProvider(props) {
// 	const [searchValue, setSearchValue] = React.useState('');

// 	let searchedTodos = [];

// 	if (!searchValue.length >= 1) {
// 		searchedTodos = todos;
// 	} else {
// 		searchedTodos = todos.filter((todo) => {
// 			const todoText = todo.text.toLowerCase();
// 			const searchText = searchValue.toLowerCase();
// 			return todoText.includes(searchText);
// 		});
// 	}
// 	return (
// 		<SearchProvider.Provider
// 			value={{
// 				searchValue,
// 				setSearchValue,
// 			}}>
// 			{props.children}
// 		</SearchProvider.Provider>
// 	);
// }
// export { SearchProvider, SearchContext };
