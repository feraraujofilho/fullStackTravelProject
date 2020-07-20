import React, { FC } from 'react';
import SearchBox from '../../../component/searchBox/SearchBox';
import { Typography } from '@material-ui/core';
import useStyles from './HomeContentStyles';

const HomeContent: FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<Typography variant="h2" component="h1">
					Compare Your Next Destinations
				</Typography>
				<Typography>
					Compare side by side a roundtrip to up to 4 destinations for all possible dates in the next 6 months
				</Typography>

				<SearchBox />
			</div>
		</div>
	);
};

export default HomeContent;
