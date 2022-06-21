import React from 'react';
import { Box } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Err404 = () => {
	return (
		<Container sx={{ minHeight: '100vh' }}>
			<Box
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				flexDirection={'column'}
				p={3}>
				<Typography variant="h6" color="initial">
					Página no encontrada
				</Typography>
				<Typography variant="h4" color="initial">
					Erro 404!
				</Typography>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
						<ArrowBackIcon />
						<Typography fontSize={17}>Volver a la tienda</Typography>
					</Button>
				</Link>
			</Box>
		</Container>
	);
};
