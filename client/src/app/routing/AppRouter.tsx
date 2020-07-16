import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContent from '../../domain/content/home/HomeContent';
import SearchResults from '../../domain/content/searchResults/SearchResults';

const AppRouter = (): ReactElement | null => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomeContent} />
				<Route exact path="/search" component={SearchResults} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
