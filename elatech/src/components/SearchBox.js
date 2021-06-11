import React from 'react';

const SearchBox = (props) => {

	
	return (
		<div className='search'>
			<input
				className='form-control'
				value={props.searchValue}
				onChange={props.handleChange}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;
