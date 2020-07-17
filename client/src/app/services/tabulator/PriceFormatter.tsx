import React, { FC } from 'react';
import { addClasses } from '../../utils/helpers';

interface PriceFormatterProps {
	cell?: any;
}

const PriceFormatter: FC<PriceFormatterProps> = ({ cell }) => {
	const value = cell.getValue();

	const columnCells = cell.getColumn().getCells();
	const mapColumnValues = columnCells.map((value: any) => value.getValue());
	const filteredArray = mapColumnValues.filter((price: any) => price);

	let average = filteredArray.reduce((acc: number, value: number) => acc + value, 0) / filteredArray.length;
	let max = Math.max(...filteredArray);
	let min = Math.min(...filteredArray);

	if (value) {
		if (value < min * 1.2) {
			addClasses(cell.getElement(), [ 'cheap' ]);
		}
		if (value > max * 0.7) {
			addClasses(cell.getElement(), [ 'expensive' ]);
		}
		if (value > min * 1.2 && value < max * 0.8) {
			addClasses(cell.getElement(), [ 'normal' ]);
		}

		return value;
	}

	return '';
};

export default PriceFormatter;
