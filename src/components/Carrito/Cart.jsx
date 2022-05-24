import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Cart = () => {
	return (
		<Container maxWidth="xs" sx={{ minHeight: '90vh' }}>
			<Typography
				variant="h2"
				color="initial"
				textAlign={'center'}
				paddingY={10}>
				Soy un carrito en progreso 🚧
			</Typography>
			<Typography
				variant="h5"
				color="initial"
				textAlign={'center'}
				paddingY={1}>
				<Link to={'/'} style={{ textDecoration: 'none' }}>
					⬅️VOLVER
				</Link>
			</Typography>
		</Container>
	);
};
export { Cart };
