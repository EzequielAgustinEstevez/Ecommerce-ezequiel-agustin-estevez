//@ts-check
import React from 'react';
import { Grid } from '@mui/material';
import Item from '../Listado/Item';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';
// import { GeneralContext } from '../../context/GeneralContext';

const DetailList = (props) => {
	// const { products } = React.useContext(GeneralContext);
	const { id } = useParams();
	// const prductDetail = [];
	// if (!id.length >= 1) {
	// 	prductDetail = products;
	// } else {
	// 	prductDetail = products.filter((product) => {
	// 		const productsTitle = product.name.toLowerCase();
	// 		const searchTitle = id.toLowerCase();
	// 		return productsTitle.includes(searchTitle);
	// 	});
	//}
	return (
		<>
			{props.error && <h1>Error</h1>}
			{props.loading && (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			)}
			<h1>DetailList</h1>
			<Grid
				container
				spacing={1}
				justifyContent="center"
				alignItems="center"
				padding={2}
				alignContent="center">
				<Grid>
					<Item itemTitle={id} />
				</Grid>
			</Grid>
		</>
	);
};

export { DetailList };
