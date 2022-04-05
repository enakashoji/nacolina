import { RFValue } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	flex-direction: row;
	margin-bottom: ${RFValue(14)}px;
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
	padding: ${RFValue(8)}px;
`;
export const BoxContato = styled.View`
	flex-direction: row;
	background-color: yellowgreen;
`;

export const BoxIcon = styled.TouchableOpacity`
	align-items: center;
	background-color: purple;
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

export const Icon = styled(MaterialCommunityIcons)`
	color: ${({ theme }) => theme.colors.texto_claro};
	font-size: ${RFValue(36)}px;
	padding-right: 5px;
`;

export const Logo = styled(MaterialIcon)`
	color: ${({ theme }) => theme.colors.icone_turquesa};
	font-size: ${RFValue(42)}px;
`;
