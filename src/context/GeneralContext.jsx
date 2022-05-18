import React, { useState } from 'react';
const GeneralContext = React.createContext();

function ItemCounter(props) {
	const [itemCarrito, setitemCarrito] = useState(0);
	return (
		<GeneralContext.Provider
			value={{
				itemCarrito,
				setitemCarrito,
			}}>
			{props.children}
		</GeneralContext.Provider>
	);
}

export { GeneralContext, ItemCounter };
