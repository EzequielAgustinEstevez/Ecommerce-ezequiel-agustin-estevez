import React from 'react';
import { Typography } from '@mui/material';

const ItemListContianer = (props) => {
	return (
		<div>
			<Typography variant="h1" align="center">
				{props.mensaje}
			</Typography>
		</div>
	);
};

export { ItemListContianer };
