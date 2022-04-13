import React, { memo } from 'react';
import { FlatList } from 'react-native';
import CardEmpresa from '../CardEmpresa';
import { BoxLista } from './styles';

let ListaEmpresa = ({ lista }) => {
	const renderItem = ({ item }) => (
		<CardEmpresa nome={item.nome} contatos={item.contatos} foto={item.foto} />
	);

	return (
		<BoxLista>
			<FlatList
				data={lista}
				keyExtractor={(item) => item.uid}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
			/>
		</BoxLista>
	);
};

export default ListaEmpresa = memo(ListaEmpresa, (prevProps, nextProps) => {
	return Object.is(prevProps.lista, nextProps.lista);
});
