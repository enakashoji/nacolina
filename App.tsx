import React from 'react';
import { useFonts } from 'expo-font';
import * as Linking from 'expo-linking';
import {
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';

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
			<SafeAreaProvider>
				<Routes />
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
