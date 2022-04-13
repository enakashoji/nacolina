import { RFValue } from 'react-native-responsive-fontsize';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

interface TypeProps {
	type: 'insta' | 'whats' | 'other';
}

export const Container = styled.View`
	flex-direction: row;
	margin-bottom: ${RFValue(14)}px;
	border-radius: ${RFValue(20)}px;
	background-color: ${({ theme }) => theme.colors.fundo_campo};
`;

export const BoxImagem = styled.View`
	width: 35%;
	height: ${RFValue(125)}px;
	border-radius: ${RFValue(20)}px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.fundo_vermelho};
`;

export const BoxDescricao = styled.View`
	justify-content: space-between;
	width: 65%;
`;
export const BoxTitulo = styled.View`
	padding: ${RFValue(8)}px ${RFValue(20)}px;
`;
export const BoxContato = styled.View`
	justify-content: space-between;
	flex-direction: row;
	padding: ${RFValue(10)}px ${RFValue(30)}px;
`;

export const Texto = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_400};
	color: ${({ theme }) => theme.colors.texto};
	font-size: ${RFValue(12)}px;
`;

export const Titulo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_700};
	color: ${({ theme }) => theme.colors.texto};
	font-size: ${RFValue(14)}px;
`;

export const Logo = styled(MaterialIcon)`
	color: ${({ theme }) => theme.colors.icone_vermelho};
	font-size: ${RFValue(42)}px;
`;

export const ImagemLogo = styled.Image`
	align-items: center;
	height: ${RFValue(125)}px;
	width: ${RFValue(125)}px;
	border-radius: 8px;
`;
