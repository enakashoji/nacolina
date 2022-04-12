import { RFValue } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { css } from 'styled-components/native';

interface TypeProps {
	type: 'insta' | 'whats' | 'other';
}

export const Container = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)<TypeProps>`
	${({ type }) =>
		type === 'insta' &&
		css`
			color: ${({ theme }) => theme.colors.insta_color};
		`};
	${({ type }) =>
		type === 'whats' &&
		css`
			color: ${({ theme }) => theme.colors.whats_color};
		`};
	${({ type }) =>
		type === 'maps' &&
		css`
			color: ${({ theme }) => theme.colors.icone_azul};
		`};
	font-size: ${RFValue(24)}px;
	padding-right: 5px;
`;
