import React, { useEffect } from 'react';
import { ItemList } from './ItemList';

const ItemListContainer = () => {
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [products, setProducts] = React.useState([]);
	useEffect(() => {
		setTimeout(() => {
			try {
				const products = [
					{
						name: 'Pantaloncito',
						image:
							'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sGPKo1idFz3aOk59XOAnWAHaFj%26pid%3DApi&f=1',
						stock: 5,
						initial: 1,
					},
					{
						name: 'Gorrito',
						image:
							'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F893497-cats-winter-hat-snout-animals.jpg&f=1&nofb=1',
						stock: 5,
						initial: 0,
					},
					{
						name: 'Botitas',
						image:
							'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn7.dissolve.com%2Fp%2FD254_10_908%2FD254_10_908_0004_600.jpg&f=1&nofb=1',
						stock: 5,
						initial: 0,
					},
					{
						name: 'Chalequito',
						image:
							'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpetslady.com%2Fsites%2Fdefault%2Ffiles%2Finline-images%2F71%252B51FaH3tL._SL1200_.jpg&f=1&nofb=1',
						stock: 5,
						initial: 0,
					},
				];
				setProducts(products);
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		}, 3000);
	}, []);
	return <ItemList data={products} error={error} cargando={loading} />;
};

export { ItemListContainer };
