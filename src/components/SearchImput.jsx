import React from 'react';
import { GeneralContext } from '../context/GeneralContext';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system';
// import { styled, alpha } from '@mui/material/styles';

function SearchImput() {
	const { searchValue, setSearchValue } = React.useContext(GeneralContext);
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	/* const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			value: { searchValue },
			onChange: { onSearchValueChange },
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}));

	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));
	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));
	 */
	return (
		<Box
			sx={{
				display: { xs: 'none', md: 'flex' },
				alignContent: 'center',
				justifyContent: 'left',
				alignItems: 'center',
				color: '#fff',
				backgroundColor: '#387ca1',
				borderRadius: '4px',
				padding: '0 0.3rem',
			}}>
			<SearchIcon />

			<InputBase
				sx={{ color: '#fff' }}
				value={searchValue}
				onChange={onSearchValueChange}
			/>
		</Box>
	);
}
export { SearchImput };
