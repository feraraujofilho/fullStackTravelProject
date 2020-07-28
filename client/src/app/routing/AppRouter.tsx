import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContent from '../../domain/content/home/HomeContent';
import SearchResults from '../../domain/content/searchResults/SearchResults';
import HeaderNavigation from '../../domain/header/HeaderNavigation';

const AppRouter = (): ReactElement | null => {
	return (
		<BrowserRouter>
			<Route path="/" component={HeaderNavigation} />
			<Switch>
				<Route exact path="/" component={HomeContent} />
				<Route exact path="/search" component={SearchResults} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
