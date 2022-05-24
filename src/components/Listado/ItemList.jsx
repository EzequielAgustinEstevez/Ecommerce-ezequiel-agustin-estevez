//@ts-check
import React from 'react';
import { Grid } from '@mui/material';
import Item from './Item';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
const ItemList = (props) => {
	let { categoryId } = useParams();
	return (
		<Box minHeight={'80vh'}>
			{props.error && <h1>Error</h1>}
			{props.loading ? (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			) : (
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection={'column'}>
					<Box>
						<h1>
							{categoryId ? (
								'Home / ' +
								categoryId.charAt(0).toUpperCase() +
								categoryId.slice(1)
							) : (
								<div>
									<HomeIcon /> Home
								</div>
							)}
						</h1>
					</Box>
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
		</Box>
	);
};

export { ItemList };
