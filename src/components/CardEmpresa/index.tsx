import React from 'react';
import { Linking, TouchableOpacityProps } from 'react-native';
import {
	BoxContato,
	BoxDescricao,
	BoxImagem,
	BoxTitulo,
	Container,
	Logo,
	Titulo,
} from './styles';

import ContactButton from '../ContactButton';

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
	const renderItem = (item: Contato) => {
		return <ContactButton key={item.tipo} contact={item} />;
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
				<BoxContato>
					{props['contatos'].map((contato) => renderItem(contato))}
				</BoxContato>
			</BoxDescricao>
		</Container>
	);
};

export default CardEmpresa;
