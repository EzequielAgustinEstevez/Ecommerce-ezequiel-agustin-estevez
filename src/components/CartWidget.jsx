import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Tooltip } from '@mui/material';
import { NavContext } from '../context/ItemCounter';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}));

export default function CustomizedBadges() {
	const { itemCarrito } = React.useContext(NavContext);
	return (
		<Tooltip title="Tu Carrito">
			<IconButton
				aria-label="cart"
				sx={{ margin: { xs: '0', sm: '0 0.8rem' } }}>
				<StyledBadge badgeContent={itemCarrito} color="secondary">
					<ShoppingCartIcon sx={{ color: '#fff' }} />
				</StyledBadge>
			</IconButton>
		</Tooltip>
	);
}
