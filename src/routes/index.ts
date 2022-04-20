import { NavigationContainerProps } from '@react-navigation/native';
import React from 'react';

interface Props extends NavigationContainerProps {}

const Routes: React.FC<Props> = ({ props: Props }) => {
	return (
		<NavigationContainer>
			<StackRoutes />
		</NavigationContainer>
	);
};

export default Routes;
