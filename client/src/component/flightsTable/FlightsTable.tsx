import React, { FC, ReactElement } from 'react';
import { FlightsTableProps } from './FlightsTableProps';
import useStyles from './FlightsTableStyles';
import useUrlSearchParams from '../../app/hooks/useUrlSearchParams';
import { useQuery } from '@apollo/client';
import queries from '../../app/services/tabulator/apollo/queries';
import { Card } from '@material-ui/core';
import { convertDateIntoRightFormat } from '../../app/utils/helpers';
import PriceTag from '../priceTag/PriceTag';


const FlightsTable: FC<FlightsTableProps> = ({ data, destinations }) => {
	const query = useUrlSearchParams();
	const origin = query.get('origin');
	const { destination1, destination2, destination3, destination4 } = destinations;
	const destinationNamesArray = Object.values(destinations)

	const { data: citiesAbb } = useQuery(queries.OriginAndDestinations, {
		variables: { origin, destination1, destination2, destination3, destination4 },
	});

	const getAbbFromName = (value: string | null, data: any) => {
		let element = data?.originAndDestinations.find((city: any) => city.name === value);
		return element?.abb
	};
	const originAbb = getAbbFromName(origin, citiesAbb)

	const classes = useStyles();

	const renderCellPrices = (el: any): ReactElement[] => {
		const { departuredate, returndate } = el
		const date = convertDateIntoRightFormat(departuredate, returndate)
		let cells = []
		for (let i = 0; i < 4; i++) {
			if (el[i]) {
				cells.push(<td><PriceTag key={i} columnValuesArray={data.map(el => el[i])} el={el[i]} originAbb={originAbb} destinationAbb={getAbbFromName(destinationNamesArray[i], citiesAbb)} date={date} /></td>)
			}
		}
		return cells
	}

	return (
		<Card className={classes.cardTable}>
			<table>
				<thead>
					<tr>
						<th style={{ margin: "10px" }}>Departure</th>
						<th>Return</th>
						{destinationNamesArray.map((destination, index) => {
							return <th key={`${destination}${index}`}>{destination}</th>
						})}
					</tr>

				</thead>
				<tbody>
					{data && data.map(el => {
						return <tr key={el.departuredate}>
							<td style={{ textAlign: "center" }}>{el.departuredate}</td>
							<td>{el.returndate}</td>
							{renderCellPrices(el)}
						</tr>
					})}
				</tbody>
			</table>
		</Card >
	);
};

export default FlightsTable;
