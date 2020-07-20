import React, { FC } from 'react';
import { addClasses, convertDateIntoRightFormat } from '../../utils/helpers';
import useStyles from './PriceFormatterStyles';

interface PriceFormatterProps {
	cell?: any;
	originAbb?: string | null;
	destinationAbb?: string;
}

const PriceFormatter: FC<PriceFormatterProps> = ({ cell, originAbb, destinationAbb }) => {
	const classes = useStyles();

	const { date } = cell.getRow().getData();
	const rightFormatDate = convertDateIntoRightFormat(date);
	const fareLink = `https://www.skyscanner.de/transport/flights/${originAbb}/${destinationAbb}/${rightFormatDate}/`;

	const value = cell.getValue();

	const columnCells = cell.getColumn().getCells();
	const mapColumnValues = columnCells.map((value: any) => value.getValue());
	const filteredArray = mapColumnValues.filter((price: any) => price);

	// let average = filteredArray.reduce((acc: number, value: number) => acc + value, 0) / filteredArray.length;
	let max = Math.max(...filteredArray);
	let min = Math.min(...filteredArray);

	if (value) {
		if (value < min * 1.3) {
			addClasses(cell.getElement(), [ 'cheap' ]);
		}
		if (value > max * 0.7) {
			addClasses(cell.getElement(), [ 'expensive' ]);
		}
		if (value > min * 1.3 && value < max * 0.8) {
			addClasses(cell.getElement(), [ 'normal' ]);
		}

		return (
			<a href={fareLink} className={classes.link} target="_blank" rel="noopener noreferrer">
				{value}
			</a>
		);
	}

	return null;
};

export default PriceFormatter;
