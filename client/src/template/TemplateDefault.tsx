import React, { FC } from 'react';
import { RouteProps, Route } from 'react-router-dom';

const TemplateDefault: FC<RouteProps> = (props) => {
	return <Route {...props} />;
};

export default TemplateDefault;
