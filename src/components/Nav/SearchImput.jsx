import { Box } from '@mui/system';
import { GeneralContext } from '../../context/GeneralContext';
import InputBase from '@mui/material/InputBase';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchImput() {
	const { searchValue, setSearchValue } = React.useContext(GeneralContext);
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

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
