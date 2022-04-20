import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Container,
	Header,
	Content,
	Imagem,
	Titulo,
	Descricao,
	BoxContato,
	Texto,
	Icon,
	BoxIcon,
} from './styles';

interface DetalheProps {
	nome: string;
	descricao: string;
	foto: string;
	contatos: Array<Contato>;
}

interface Contato {
	tipo: 'insta' | 'whats' | 'other';
	endereco: string;
}

const Detalhe: React.FC<DetalheProps> = ({
	nome,
	descricao,
	foto,
	contatos,
}) => {
	const temp =
		'https://instagram.fbsb3-1.fna.fbcdn.net/v/t51.2885-19/209008448_5016416748407266_4036360678747136867_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbsb3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=hA7MKq0YohQAX_tuM0p&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-IcuAbcy695jenwkMLy_T5cgMHTpoceCmkGaGQXuDjWw&oe=62650304&_nc_sid=7bff83';
	foto = temp;
	return (
		<Container>
			<StatusBar style='auto' translucent backgroundColor='transparent' />
			<Header>
				<BoxIcon>
					<Icon name='chevron-left' />
				</BoxIcon>
				<Imagem resizeMode='contain' source={{ uri: foto }}></Imagem>
			</Header>
			<Content>
				<Titulo>Bruschettaria</Titulo>
				<Descricao>
					<Texto>
						🌳 Operadora de Turismo Colaborativa{'\n'}
						🌄 Turismo de Experiência e Ecoturismo{'\n'}
					</Texto>
				</Descricao>
				<BoxContato>
					<Texto>(61) 5555-5555</Texto>
				</BoxContato>
			</Content>
		</Container>
	);
};

export default Detalhe;
