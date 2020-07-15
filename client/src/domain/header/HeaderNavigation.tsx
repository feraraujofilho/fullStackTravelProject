import React, { FC } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

const HeaderNavigation: FC = () => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" />
					<Typography variant="h6">News</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default HeaderNavigation;
