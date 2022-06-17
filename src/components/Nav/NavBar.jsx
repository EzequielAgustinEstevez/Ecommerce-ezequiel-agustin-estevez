//@ts-check

import ClickAwayListener from '@mui/base/ClickAwayListener';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import StarBorder from '@mui/icons-material/StarBorder';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { SearchImput } from './SearchImput';

//import FirebaseDoc from '../../db/FirebaseDB';

const pages = [
	{ name: 'Nuestra fabrica', slug: 'nuestra-fabrica' },
	{ name: 'Quienes somos?', slug: 'quienes-somos' },
	{ name: 'Contacto', slug: 'contacto' },
];
const subpages = [
	{ name: 'Pantaloncitos', slug: 'pantaloncitos' },
	{ name: 'Gorritos', slug: 'gorritos' },
	{ name: 'Botitas', slug: 'botitas' },
	{ name: 'Chalequitos', slug: 'chalequitos' },
];
const settings = [
	{ name: 'Avatar', slug: 'avatar' },
	{ name: 'Direccion', slug: 'direccion' },
	{ name: 'Historial', slug: 'historial' },
	{ name: 'Cerrar Sesion', slug: 'cerrar-sesion' },
];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [open, setOpen] = React.useState(true);

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
	const MenuProd = () => {
		setOpen(true);
	};
	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/* LOGO responsive */}
					<PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Link to={'/'} style={{ textDecoration: 'none' }}>
						<Typography
							variant="h6"
							noWrap
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
							}}>
							Cat Clothes
						</Typography>
					</Link>
					{/* MENU RESPONSIVE LOGO */}
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
						{/* MENU RESPONSIVE DESPLEGABLE */}
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
								<MenuItem key={page.slug} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page.name}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					{/* LOGO  */}
					<PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Link to={'/'} style={{ textDecoration: 'none' }}>
						<Typography
							variant="h5"
							noWrap
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
					</Link>
					{/* MENU */}
					<Box
						sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
						justifyContent={'center'}
						alignItems={'center'}>
						{/* Productos > desplegables */}
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
										<NavLink
											key={subpage.slug}
											to={`/category/${subpage.slug}`}
											style={{ textDecoration: 'none' }}>
											<ClickAwayListener onClickAway={MenuProd}>
												<Box display={'flex'}>
													<ListItemButton sx={{ pl: 4 }}>
														<ListItemIcon>
															<StarBorder sx={{ color: '#ffff' }} />
														</ListItemIcon>
														<ListItemText primary={subpage.name} />
													</ListItemButton>
												</Box>
											</ClickAwayListener>
										</NavLink>
									))}
								</List>
							</Collapse>
						</List>
						{/* MENU ITEMS */}
						{pages.map((page) => (
							<Button
								key={page.slug}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}>
								{page.name}
							</Button>
						))}
					</Box>
					{/* BUSCADOR */}
					<SearchImput />
					{/* CARRITO */}
					<Box sx={{ flexGrow: 0 }}>
						<CartWidget />
					</Box>
					{/* MENU USUARIO */}
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
						{/* MENU USUARIO DESPLEGABLE */}
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
									key={setting.slug}
									onClick={handleCloseUserMenu}
									sx={{ p: '0.3em 2em' }}>
									<Typography textAlign="center">{setting.name}</Typography>
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
