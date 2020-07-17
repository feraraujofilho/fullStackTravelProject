import React, { FC } from 'react';
import { ReactTabulator, reactFormatter } from 'react-tabulator';
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css';
import { FlightsTableProps } from './FlightsTableProps';
import useStyles from './FlightsTableStyles';
import PriceFormatter from '../../app/services/tabulator/PriceFormatter';

const FlightsTable: FC<FlightsTableProps> = ({ data, headers }) => {
	const classes = useStyles();

	const handleColumns = () =>
		Object.values(headers).reduce(
			(accumulator: any[], value: string, index: number) => {
				if (value) {
					accumulator.push({
						title: value,
						field: index.toString(),
						formatter: reactFormatter(<PriceFormatter />)
					});
				}
				return accumulator;
			},
			[ { title: 'Date', field: 'date', width: 200 } ]
		);

	return (
		<div>
			<ReactTabulator
				className={classes.table}
				columns={handleColumns()}
				data={data}
				layout={'fitColumns'}
				options={{
					...{
						invalidOptionWarnings: false,
						autoResize: true
					}
				}}
			/>
		</div>
	);
};

export default FlightsTable;
