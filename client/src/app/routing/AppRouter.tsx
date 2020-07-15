import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../../App';
import HomeContent from '../../domain/content/home/HomeContent';

const AppRouter = (): ReactElement | null => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomeContent} />
				<Route exact path="/test" component={App} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
