//@ts-check
import React from 'react';
import { Box } from '@mui/material';
import Api from '../../db/Api';
const Footer = () => {
	return (
		<Box display={'flex'} flexDirection={'column'}>
			<Box
				paddingY={2}
				display={'flex'}
				justifyContent={'space-around'}
				sx={{ backgroundColor: '#272822', color: '#fff' }}>
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
				paddingY={0.01}
				sx={{ backgroundColor: '#4c4e42', color: '#fff' }}
				textAlign={'center'}>
				<p>
					By{' '}
					<b>
						<a href="https://ezequielestevez.com/">Ezequiel Estevez</a>
					</b>{' '}
					©
				</p>
			</Box>
		</Box>
	);
};
export { Footer };
