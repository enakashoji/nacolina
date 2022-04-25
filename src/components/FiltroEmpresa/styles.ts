import { TextInput, TouchableOpacity } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 10px;
	width: 80%;
	margin-bottom: 10px;
`;

export const BoxFiltro = styled.View`
	flex-direction: row;
	border-radius: 20px;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.fundo_campo};
`;
export const BoxIcon = styled.View`
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	padding: 10px 0px 10px 20px;
`;

export const BoxClear = styled(TouchableOpacity)`
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	padding: 10px 20px 10px 0px;
`;

export const Filtro = styled(TextInput)`
	flex: 1;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.fundo_campo};
	align-items: center;
	justify-content: center;
	padding: 10px;
`;

export const Icon = styled(Octicons)`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.texto_claro};
`;

export const Texto = styled.Text``;
