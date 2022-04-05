import React from 'react';
import {
	FlatList,
	Linking,
	ListRenderItem,
	TouchableOpacityProps,
} from 'react-native';
import {
	BoxContato,
	BoxDescricao,
	BoxImagem,
	BoxTitulo,
	Container,
	Icon,
	Logo,
	Texto,
	Titulo,
} from './styles';

interface Contato {
	tipo: 'insta' | 'whats' | 'other';
	endereco: string;
}

export interface CardProps extends TouchableOpacityProps {
	uid: string;
	nome: string;
	endereco: string;
	contatos: Array<Contato>;
}

const CardEmpresa = ({ ...props }) => {
	const handleClick = (contato: Contato) => {
		if (contato.tipo === 'insta') {
			Linking.openURL(`https://www.instagram.com/${contato.endereco}`);
		}
		if (contato.tipo === 'whats') {
			Linking.openURL(`https://wa.me/55${contato.endereco}`);
		}
	};

	const renderItem: ListRenderItem<Contato> = ({ item }) => {
		return (
			<BoxContato onPress={() => handleClick(item)}>
				<Icon name={item.tipo === 'insta' ? 'instagram' : 'whatsapp'} />
				<Texto>{item.endereco}</Texto>
			</BoxContato>
		);
	};

	return (
		<Container>
			<BoxImagem>
				<Logo name={'store-mall-directory'}></Logo>
			</BoxImagem>
			<BoxDescricao>
				<BoxTitulo>
					<Titulo>{props['nome']}</Titulo>
				</BoxTitulo>
				<FlatList
					data={props['contatos']}
					keyExtractor={(item) => item.endereco}
					renderItem={renderItem}
				/>
			</BoxDescricao>
		</Container>
	);
};

export default CardEmpresa;
