import React from 'react';
import {
	NavigationContainer,
	NavigationContainerProps,
} from '@react-navigation/native';
import { StackRoutes } from './stack.routes';

interface Props extends NavigationContainerProps {}

export const Routes = () => {
	return (
		<NavigationContainer>
			<StackRoutes />
		</NavigationContainer>
	);
};

export default Routes;
