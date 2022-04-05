import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Texto = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_700};
	color: ${({ theme }) => theme.colors.texto};
	font-size: 22px;
`;

export const BoxLista = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.fundo};
	margin: 32px 24px;
`;
