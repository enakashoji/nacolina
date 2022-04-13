import axios from 'axios';

const request = async () => {
	try {
		const res = await axios.get(
			'https://raw.githubusercontent.com/enakashoji/nacolina/develop/src/assets/data/prestador.json'
		);
	} catch (error) {
		throw error;
	}
};

const buscarFotoPerfil = async (perfil: string) => {
	const url = `https://www.instagram.com/${perfil}/?__a=1`;
	try {
		console.log(url);
		const res = await axios.get(url);
		return res.data;
	} catch (error) {
		throw error;
	}
};

export default buscarFotoPerfil;
