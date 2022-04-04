import { RFValue } from 'react-native-responsive-fontsize';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	flex-direction: row;
	/* 
	margin-bottom: ${RFValue(14)}px;
	background-color: ${({ theme }) => theme.colors.fundo_campo};*/
`;

export const BoxImagem = styled.View`
	/* 
	height: ${RFValue(125)};
	width: ${RFValue(125)};
	*/
	border-radius: ${RFValue(20)}px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.icone_verde_agua_claro};
`;

export const BoxDescricao = styled.View`
	/* padding: ${RFValue(14)}px; */
	background-color: purple;
`;
export const BoxTitulo = styled.View`
	padding: ${RFValue(8)}px;
	/* flex-wrap: nowrap; */
	background-color: orange;
`;
export const BoxContato = styled.View`
	flex-direction: row;
	align-items: center;
	padding-right: 10px;
	/* 
	flex-wrap: nowrap; */
	background-color: greenyellow;
`;

export const Texto = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_400};
	color: ${({ theme }) => theme.colors.texto};
`;

export const Titulo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_700};
	color: ${({ theme }) => theme.colors.texto};
`;

export const Icon = styled(MaterialIcon)`
	color: ${({ theme }) => theme.colors.icone_azul};
	font-size: ${RFValue(12)}px;
`;

export const Logo = styled(MaterialIcon)`
	color: ${({ theme }) => theme.colors.icone_azul};
	font-size: ${RFValue(12)}px;
`;
