import React, { useState } from 'react';
function ItemCounter({ suma }) {
	const [count, setCount] = useState(Math.floor(Math.random() * 10));

	return count;
}

export default ItemCounter;
