import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './app/routing/AppRouter';
/* import 'react-tabulator/lib/css/tabulator.min.css' */
/* import 'react-tabulator/lib/styles.css' */
import "./app/themes/style.scss"

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './app/themes/baseMuiTheme';


const client = new ApolloClient({
	uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
	cache: new InMemoryCache()
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<React.StrictMode>
				<CssBaseline />
				<AppRouter />
			</React.StrictMode>
		</ThemeProvider>


	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
