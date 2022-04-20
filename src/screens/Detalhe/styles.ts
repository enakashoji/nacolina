import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from 'react-native-vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
	background-color: ${({ theme }) => theme.colors.fundo_vermelho};
	width: 100%;
	height: ${RFValue(200)}px;
	padding-top: ${getStatusBarHeight()}px;
	margin-bottom: ${RFValue(24)}px;
`;

export const Content = styled.View`
	flex: 1;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.colors.fundo_campo};
	margin: ${RFValue(24)}px;
	padding: ${RFValue(24)}px;
`;

export const Imagem = styled.Image`
	flex: 1;
	align-items: center;
	margin: ${RFValue(8)}px;
`;

export const Titulo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_600};
	font-size: ${RFValue(18)}px;
`;

export const Descricao = styled.View``;

export const BoxContato = styled.View``;

export const Texto = styled.Text`
	text-transform: uppercase;
	font-family: ${({ theme }) => theme.fonts.primary_700};
	color: ${({ theme }) => theme.colors.texto_cinza_claro};
`;

export const Icon = styled(Feather)`
	font-size: ${RFValue(24)}px;
	color: ${({ theme }) => theme.colors.fundo};
`;

export const BoxIcon = styled.View`
	padding-left: ${RFValue(10)}px;
`;
