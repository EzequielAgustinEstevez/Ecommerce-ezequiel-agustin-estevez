//@ts-check
import React from 'react';
import { Grid } from '@mui/material';
import Item from './Item';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ItemList = (props) => {
	return (
		<>
			{props.error && <h1>Error</h1>}
			{props.loading && (
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
					<Grid item key={data.id}>
						<Item
							id={data.id}
							itemTitle={data.name}
							itemImage={data.image}
							itemStock={data.stock}
							initial={data.initial}
							price={data.price}
						/>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export { ItemList };
