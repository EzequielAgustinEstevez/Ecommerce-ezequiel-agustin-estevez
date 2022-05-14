import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Tooltip } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}));

export default function CustomizedBadges(suma) {
	const [contador, setContador] = useState(2);
	function masUno() {
		setContador(contador + 1);
	}

	return (
		<Tooltip title="Tu Carrito">
			<IconButton
				aria-label="cart"
				sx={{ margin: { xs: '0', sm: '0 0.8rem' } }}
				onClick={masUno}>
				<StyledBadge badgeContent={contador} color="secondary">
					<ShoppingCartIcon sx={{ color: '#fff' }} />
				</StyledBadge>
			</IconButton>
		</Tooltip>
	);
}
