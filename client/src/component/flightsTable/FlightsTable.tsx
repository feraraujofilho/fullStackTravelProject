import React, { FC } from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css';
import { FlightsTableProps } from './FlightsTableProps';

const FlightsTable: FC<FlightsTableProps> = ({ data, headers }) => {
	const handleColumns = () =>
		Object.values(headers).reduce(
			(accumulator: any[], value: string, index: number) => {
				if (value) {
					accumulator.push({
						title: value,
						field: index.toString()
					});
				}
				return accumulator;
			},
			[ { title: 'Date', field: 'date', width: 200 } ]
		);

	return (
		<div>
			<ReactTabulator
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
