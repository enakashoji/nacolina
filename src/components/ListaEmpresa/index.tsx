import React, { memo } from 'react';
import { FlatList } from 'react-native';
import CardEmpresa from '../CardEmpresa';
import { BoxLista } from './styles';

interface Data {}
let ListaEmpresa = ({ lista }) => {
	const renderItem = ({ item }) => <CardEmpresa {...item} />;
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
