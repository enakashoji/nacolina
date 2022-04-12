import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';
import * as prestador from '../../assets/data/prestador.json';
import FiltroEmpresa from '../../components/FiltroEmpresa';
import ListaEmpresa from '../../components/ListaEmpresa';

interface Contato {
	tipo: 'insta' | 'whats' | 'other';
	endereco: string;
}
interface EmpresaProps {
	uid: string;
	nome: string;
	endereco: string;
	contatos: Array<Contato>;
}

const Home = () => {
	const initialState = prestador.lista;

	const [lista, setLista] = useState(initialState);
	const [filtro, setFiltro] = useState('');
	const [loading, setLoading] = useState(false);

	const handleClear = useCallback(() => {
		setLoading(true);
		setFiltro('');
		setLoading(false);
	}, []);

	useEffect(() => {
		setLoading(true);
		setLista(() =>
			initialState.filter((empresa) =>
				empresa.nome.toUpperCase().includes(filtro.toUpperCase())
			)
		);
		setLoading(false);
	}, [filtro]);

	useMemo(() => {
		lista.filter((empresa) =>
			empresa.nome.toUpperCase().includes(filtro.toUpperCase())
		);
	}, [lista]);

	return (
		<Container>
			<ActivityIndicator animating={true} />
			<FiltroEmpresa onSearch={setFiltro} onClear={handleClear} />
			<ListaEmpresa lista={lista} />
		</Container>
	);
};

export default Home;
