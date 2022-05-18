import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import CartWidget from './CartWidget';
import { GeneralContext } from '../context/GeneralContext';
import { SearchImput } from './SearchImput';

const pages = ['Nuestra fabrica', 'Quienes somos?', 'Contacto'];
const subpages = ['Trajesitos', 'Botitas', 'Chalequitos'];
const settings = ['Avatar', 'Direccion', 'Historial', 'Cerrar Sesion'];

const NavBar = () => {
	const { searchValue, setSearchValue } = React.useContext(GeneralContext);
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [open, setOpen] = React.useState(true);
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.2rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						Cat Clothings
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: { xs: '0', sm: '.3rem' },
							color: 'inherit',
							textDecoration: 'none',
						}}>
						Cat Clothings
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<List component="nav" aria-labelledby="nested-list-subheader">
							<ListItemButton onClick={handleClick}>
								<ListItemText primary="Productos" />
								{open ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={!open} timeout="auto" unmountOnExit>
								<List
									component="div"
									disablePadding
									sx={{
										position: 'absolute',
										background: '#3f8db5',
										boxShadow: '10px 10px 10px rgba(0,0,0,0.1)',
									}}>
									{subpages.map((subpage) => (
										<ListItemButton key={subpage} sx={{ pl: 4 }}>
											<ListItemIcon>
												<StarBorder sx={{ color: '#ffff' }} />
											</ListItemIcon>
											<ListItemText primary={subpage} />
										</ListItemButton>
									))}
								</List>
							</Collapse>
						</List>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}>
								{page}
							</Button>
						))}
					</Box>
					<SearchImput />
					<Box>
						<input
							className="TodoSearch"
							placeholder="Cebolla"
							value={searchValue}
							onChange={onSearchValueChange}
						/>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<CartWidget />
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Opciones">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
								<Avatar
									alt="Ezequiel Estevez"
									src="https://ezequielestevez.com/assets/images/EzequielEstevez-Perfil-b.webp"
									sx={{ background: '#fff', border: '3px solid #9c27b0' }}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map((setting) => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
									sx={{ p: '0.3em 2em' }}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export { NavBar };
