import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './HeaderNavigationStyles';

const HeaderNavigation: FC = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					<Link to="/" className={classes.link}>
						<Typography variant="h6">Home</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default HeaderNavigation;
