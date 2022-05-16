import React from 'react';
import { Grid } from '@mui/material';
import Item from './Item';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { NavContext } from '../context/ItemCounter';

const ItemList = (props) => {
	//! Contexto
	const { onAdd } = React.useContext(NavContext);

	return (
		<>
			{props.error && <p>Error: {props.error}</p>}
			{props.cargando && (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			)}
			<Grid
				container
				spacing={1}
				justifyContent="center"
				alignItems="center"
				padding={2}
				alignContent="center">
				{props.data.map((data) => (
					<Grid item key={data.name}>
						<Item
							itemTitle={data.name}
							itemImage={data.image}
							itemStock={data.stock}
							initial={data.initial}
							price={data.price}
							onAdd={onAdd}
						/>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export { ItemList };
