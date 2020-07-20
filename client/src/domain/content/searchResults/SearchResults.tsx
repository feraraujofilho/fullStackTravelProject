import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import FlightsTable from '../../../component/flightsTable/FlightsTable';
import { get } from 'lodash';
import SearchBox from '../../../component/searchBox/SearchBox';
import HeaderNavigation from '../../header/HeaderNavigation';
import useUrlSearchParams from '../../../app/hooks/useUrlSearchParams';

const SearchResults: FC = () => {
	const location = useLocation();
	const { state } = location;
	const query = useUrlSearchParams();

	const origin = query.get('origin');
	const destination1 = query.get('destination1');
	const destination2 = query.get('destination2');
	const destination3 = query.get('destination3');
	const destination4 = query.get('destination4');
	const nights = query.get('nights');

	const destinationsObject = {
		destination1: destination1,
		destination2: destination2,
		destination3: destination3,
		destination4: destination4
	};

	const tableData = get(state, 'data', null);

	return (
		<div>
			<HeaderNavigation />
			<SearchBox searchInfo={{ origin: origin, nights, ...destinationsObject }} />
			<FlightsTable data={tableData || []} destinations={destinationsObject} />
		</div>
	);
};

export default SearchResults;
