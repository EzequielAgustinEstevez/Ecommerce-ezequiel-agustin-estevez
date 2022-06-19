//@ts-check

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { Button, capitalize, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link, useParams } from 'react-router-dom';
import Item from './Item';

const ItemList = (props) => {
	let { categoryId } = useParams();
	return (
		<Box minHeight={'80vh'}>
			{props.loading ? (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			) : (
				<Box>
					{props.error ? (
						<Box
							display="flex"
							justifyContent="center"
							padding={5}
							flexDirection="column"
							alignItems={'center'}>
							<Box>
								<Typography variant="h6" color="initial">
									Categoría no encontrada!
								</Typography>
							</Box>
							<Box p={3}>
								<Link to="/" style={{ textDecoration: 'none' }}>
									<Button variant="contained" color="primary">
										<ArrowBackIcon />
										<Typography fontSize={17}>Volver a la tienda</Typography>
									</Button>
								</Link>
							</Box>
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
										`Home / ${capitalize(categoryId)}`
									) : (
										<div>
											<HomeIcon /> Home
										</div>
									)}
								</h1>
							</Box>
						</Box>
					)}
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
							itemStock={Number(data.stock)}
							initial={Number(data.initial)}
							price={Number(data.price)}
							detaill={data.detaill}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export { ItemList };
