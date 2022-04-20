import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalhe from '../screens/Detalhe';
import Home from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='Home' component={Home} />
			<Screen name='Detalhe' component={Detalhe} />
		</Navigator>
	);
};
