import React from 'react';
import { TouchableOpacityProps } from 'react-native';
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
import ImgEmpresa from '../../assets/imagens/shop-store.svg';
import { RFValue } from 'react-native-responsive-fontsize';

interface Contato {
	tipo: string;
	endereco: string;
}

export interface CardProps extends TouchableOpacityProps {
	uid: string;
	nome: string;
	endereco: string;
	contatos: Array<Contato>;
}

const CardEmpresa = ({ ...props }) => {
	return (
		<Container>
			<BoxImagem>
				<Logo name={'store-mall-directory'}></Logo>
				{/* <ImgEmpresa width={RFValue(125)} height={RFValue(125)} /> */}
			</BoxImagem>
			<BoxDescricao>
				<BoxTitulo>
					<Titulo>{props['nome']}</Titulo>
				</BoxTitulo>
				<BoxContato>
					<Icon name={'location-on'} />
					<Texto>{props['endereco']}</Texto>
				</BoxContato>
			</BoxDescricao>
		</Container>
	);
};

export default CardEmpresa;
