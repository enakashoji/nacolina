import React, { useEffect } from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';
import {
	BoxContato,
	BoxDescricao,
	BoxImagem,
	BoxTitulo,
	Container,
	ImagemLogo,
	Logo,
	Titulo,
} from './styles';

import ContactButton from '../ContactButton';
import buscarFotoPerfil from '../../service/api';

interface Contato {
	tipo: 'insta' | 'whats' | 'other';
	endereco: string;
}

export interface CardProps extends TouchableOpacityProps {
	nome: string;
	contatos: Array<Contato>;
	foto: ImageProps['source'];
}

const CardEmpresa = ({ nome, contatos, foto }) => {
	const renderItem = (item: Contato) => {
		return <ContactButton key={item.tipo} contact={item} />;
	};

	// const endereco: string = contatos
	// 	.filter((contato) => contato.tipo === 'insta')
	// 	.map((res) => res.endereco);
	// const fotoPerfil = buscarFotoPerfil(endereco[0]).then((insta) =>
	// 	console.log(insta)
	// );

	// console.log(fotoPerfil);

	return (
		<Container>
			<ImagemLogo resizeMode='contain' source={{ uri: foto }} />
			<BoxDescricao>
				<BoxTitulo>
					<Titulo>{nome}</Titulo>
				</BoxTitulo>
				<BoxContato>
					{contatos.map((contato) => renderItem(contato))}
				</BoxContato>
			</BoxDescricao>
		</Container>
	);
};

export default CardEmpresa;
