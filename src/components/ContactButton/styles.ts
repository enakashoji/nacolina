import { RFValue } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

interface TypeProps {
	type: 'insta' | 'whats' | 'other';
}

export const Container = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`;

export const Icon = styled(MaterialCommunityIcons)<TypeProps>`
	color: ${({ theme, type }) =>
		type === 'insta' ? theme.colors.insta_color : theme.colors.whats_color};
	font-size: ${RFValue(36)}px;
	padding-right: 5px;
`;
