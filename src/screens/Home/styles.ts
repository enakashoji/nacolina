import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding-top: ${RFValue(50)}px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.fundo};
`;

export const Texto = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_700};
	color: ${({ theme }) => theme.colors.texto};
	font-size: 22px;
`;
