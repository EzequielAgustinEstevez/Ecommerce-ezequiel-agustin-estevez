import React, { useState } from 'react';

const NavContext = React.createContext();

function ItemCounter(props) {
	const [itemCarrito, setitemCarrito] = useState(0);
	function onAdd(itemCount, itemTitle) {
		setitemCarrito(itemCount + itemCarrito);
	}
	return (
		<NavContext.Provider
			value={{
				itemCarrito,
				setitemCarrito,
				onAdd,
			}}>
			{props.children}
		</NavContext.Provider>
	);
}
export { NavContext, ItemCounter };
