import React, { FC } from 'react';
import { ReactTabulator, reactFormatter } from 'react-tabulator';
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css';
import { FlightsTableProps } from './FlightsTableProps';
import useStyles from './FlightsTableStyles';
import PriceFormatter from '../../app/services/tabulator/PriceFormatter';
import useUrlSearchParams from '../../app/hooks/useUrlSearchParams';
import { useQuery } from '@apollo/client';
import queries from '../../app/services/tabulator/apollo/queries';

const FlightsTable: FC<FlightsTableProps> = ({ data, destinations }) => {
	const query = useUrlSearchParams();
	const origin = query.get('origin');
	const { destination1, destination2, destination3, destination4 } = destinations;

	const { data: citiesAbb } = useQuery(queries.OriginAndDestinations, {
		variables: { origin, destination1, destination2, destination3, destination4 },
	});

	const getAbbFromName = (value: string | null, data: any) => {
		let element = data?.originAndDestinations.find((city: any) => city.name === value);
		return element?.abb
	};

	const classes = useStyles();

	const handleColumns = () => {
		const originAbb = getAbbFromName(origin, citiesAbb)
			return Object.values(destinations).reduce(
			(accumulator: any[], value: string, index: number) => {
				const destinationAbb = getAbbFromName(value, citiesAbb);
				if (value) {
					accumulator.push({
						title: value,
						field: index.toString(),
						formatter: reactFormatter(<PriceFormatter originAbb={originAbb} destinationAbb={destinationAbb} />),
						sorterParams: { alignEmptyValues: 'bottom' }
					});
				}
				return accumulator;
			},
			[ { title: 'Date', field: 'date', width: 200 } ]
		)
	};

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
