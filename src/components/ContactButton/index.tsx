import React, { useCallback, useEffect } from 'react';
import { Linking, Platform, TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

interface Contact {
	type: 'insta' | 'whats' | 'maps' | 'other';
	address: string;
}
interface ContactButtonProps extends TouchableOpacityProps {
	contact: Contact;
}

const icon = {
	insta: 'instagram',
	whats: 'whatsapp',
	maps: 'google-maps',
};

const ContactButton = ({ contact }) => {
	const openMaps = async () => {
		if (Platform.OS === 'ios') {
			Linking.openURL(`http://maps.apple.com/maps?daddr=${contact.endereco}`);
		}
		if (Platform.OS === 'android') {
			Linking.openURL(`http://maps.google.com/maps?daddr=${contact.endereco}`);
		}
	};

	const openInsta = async () => {
		await Linking.openURL(`https://www.instagram.com/${contact.endereco}`);
	};

	const openWhats = () => {
		Linking.openURL(`https://wa.me/55${contact.endereco}`);
	};

	const handleClick = useCallback((contact) => {
		if (contact.tipo === 'insta') openInsta();
		if (contact.tipo === 'whats') openWhats();
		if (contact.tipo === 'maps') openMaps();
	}, []);

	return (
		<Container key={contact.tipo} onPress={() => handleClick(contact)}>
			<Icon name={icon[contact.tipo]} type={contact.tipo} />
		</Container>
	);
};

export default ContactButton;
