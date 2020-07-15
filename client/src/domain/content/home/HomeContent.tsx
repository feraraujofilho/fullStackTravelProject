import React, { FC } from 'react';
import SearchBox from '../../../component/searchBox/SearchBox';
import HeaderNavigation from '../../header/HeaderNavigation';
import { Card, CardContent } from '@material-ui/core';

const HomeContent: FC = () => {
	return (
		<div>
			<HeaderNavigation />
			<Card>
				<CardContent>
					<SearchBox />
				</CardContent>
			</Card>
		</div>
	);
};

export default HomeContent;
