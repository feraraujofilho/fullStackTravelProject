import React, { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { NumberOfNightsDropdownProps } from './NumberOfNightsDropdownProps';
import useStyles from './NumberOfNightsDropdownStyles';

const NumberOfNightsDropdown: FC<NumberOfNightsDropdownProps> = ({ quantity, onChange }) => {
	const classes = useStyles();

	return (
		<FormControl className={classes.formControl}>
			<InputLabel id="quantityInputLabel">Nights</InputLabel>
			<Select labelId="quantityInputLabel" id="nights" name="nights" value={quantity} onChange={onChange}>
				{[ ...Array(10) ].map((element, index) => {
					const value = `${index + 1}`;
					return (
						<MenuItem key={value} value={value}>
							{value}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

export default NumberOfNightsDropdown;
