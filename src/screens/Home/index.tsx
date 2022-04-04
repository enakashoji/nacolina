import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import { BoxLista, Container } from './styles';
import * as prestador from '../../assets/data/prestador.json';
import CardEmpresa from '../../components/CardEmpresa';

const Home = () => {
	const renderItem = ({ item }) => <CardEmpresa {...item} />;
	return (
		<Container>
			<StatusBar
				barStyle='light-content'
				backgroundColor={'transparent'}></StatusBar>
			<BoxLista>
				<FlatList
					data={prestador.lista}
					keyExtractor={(item) => item.uid}
					renderItem={renderItem}
				/>
			</BoxLista>
		</Container>
	);
};

export default Home;
