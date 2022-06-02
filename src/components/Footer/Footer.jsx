//@ts-check

import Api from '../../db/Api';
import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Box display={'flex'} flexDirection={'column'}>
			<Box
				paddingY={2}
				display={'flex'}
				justifyContent={'space-around'}
				sx={{ backgroundColor: '#202124', color: '#fff' }}>
				<Box></Box>
				<Box
					display={'flex'}
					justifyContent={'center'}
					flexDirection={'column'}
					alignItems={'center'}>
					<h1>Nuestro modelo del día 😎</h1>
					<Api />
				</Box>
				<Box></Box>
			</Box>
			<Box
				sx={{ backgroundColor: '#41444a', color: '#fff' }}
				textAlign={'center'}>
				<p>
					© 2022{' '}
					<b>
						<a
							href="https://ezequielestevez.com/"
							target="_blank"
							rel="noopener noreferrer">
							Ezequiel Estevez
						</a>
					</b>{' '}
					- Todos los derechos reservados
				</p>
			</Box>
		</Box>
	);
};
export { Footer };
