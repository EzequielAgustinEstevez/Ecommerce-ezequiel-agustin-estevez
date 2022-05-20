import React from 'react';
import { GeneralContext } from '../../context/GeneralContext';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { ItemCount } from '../Listado/ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (props) => {
	const { id } = useParams();
	const { error, loading, products } = React.useContext(GeneralContext);
	const idSearch = products.findIndex((s) => s.id === 'prod1');

	return (
		<>
			{error && <h1>Error</h1>}
			{loading && (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			)}
			<h1>DetailList {id} </h1>
			<Box
				container
				spacing={1}
				justifyContent="center"
				alignItems="center"
				padding={2}
				alignContent="center">
				<ItemCount itemStock={products[idSearch].stock} initial={'1'} />
			</Box>
		</>
	);
};
export { ItemDetailContainer };
