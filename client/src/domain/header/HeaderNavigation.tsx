import React, { FC } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './HeaderNavigationStyles';
import logo from "../../images/Logo_oficial_azul.png"


const HeaderNavigation: FC = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static" className={classes.root}>
				<Toolbar className={classes.toolbar}>
					<Link to="/" >
						<img className={classes.img} src={logo} alt="logo" />
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default HeaderNavigation;
