import { useFonts } from 'expo-font';
import React from 'react';
import * as Linking from 'expo-linking';
import {
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import Home from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

const prefix = Linking.createURL('/');

export default function App() {
	const [fontsLoaded] = useFonts({
		OpenSans_400Regular,
		OpenSans_600SemiBold,
		OpenSans_700Bold,
	});

	const linking = {
		prefixes: [prefix],
	};

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}
