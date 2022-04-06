import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { BoxLista, Container } from './styles';
import * as prestador from '../../assets/data/prestador.json';
import CardEmpresa from '../../components/CardEmpresa';
import FiltroEmpresa from '../../components/FiltroEmpresa';

const Home = () => {
	const renderItem = ({ item }) => <CardEmpresa {...item} />;
	const [lista, setLista] = useState(prestador.lista);
	const [filtro, setFiltro] = useState('');
	const [loading, setLoading] = useState(false);

	// const listaFiltred = useMemo(
	// 	() => lista.filter((empresa) => filtro.includes(empresa.nome)),
	// 	[lista, filtro]
	// );

	const handleTyping = (texto: string) => {
		console.log('Maldito!', texto.length);
		setLoading(true);
		setFiltro(texto);
		if (texto?.length > 0)
			setLista(
				lista.filter((empresa) =>
					empresa.nome.toUpperCase().includes(filtro.toUpperCase())
				)
			);
		setLoading(false);
	};

	const handleClear = () => {
		setLoading(true);
		setFiltro('');
		setLista(prestador.lista);
		setLoading(false);
	};

	return (
		<Container>
			<StatusBar
				barStyle='light-content'
				backgroundColor={'transparent'}></StatusBar>
			<FiltroEmpresa
				textoBusca={filtro}
				onSearch={handleTyping}
				onClear={handleClear}
			/>
			<BoxLista>
				<FlatList
					data={lista}
					keyExtractor={(item) => item.uid}
					renderItem={renderItem}
				/>
			</BoxLista>
		</Container>
	);
};

export default Home;
