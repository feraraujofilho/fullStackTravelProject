import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import citiesQueries from './apollo/citiesQueries';
import { TextField, MenuItem } from '@material-ui/core';
import { City } from './interfaces/City';
import DropdownSelectCityProps from './DropdownSelectCityProps';
import useStyles from './DropdownSelectCityStyles';

const DropdownSelectCity: FC<DropdownSelectCityProps> = ({ label, handleInputChange, name, value }) => {
	const classes = useStyles();

	const { data } = useQuery(citiesQueries.Cities);

	return (
		<TextField
			variant="outlined"
			className={classes.root}
			size="small"
			select
			name={name}
			label={label}
			value={value}
			onChange={handleInputChange}
			fullWidth
		>
			<MenuItem value="">
				<em>None</em>
			</MenuItem>
			{name === 'origin' ? (
				<MenuItem value={'Berlin (alle)'} key={'Berlin (alle)'}>
					Berlin (alle)
				</MenuItem>
			) : (
				data &&
				data.cities.map((city: City) => {
					return (
						<MenuItem value={city.name} key={city.name}>
							{city.name}
						</MenuItem>
					);
				})
			)}
		</TextField>
	);
};

export default DropdownSelectCity;
