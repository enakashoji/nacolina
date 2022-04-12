import React, { useCallback, useEffect, useState } from 'react';
import {
	BoxClear,
	BoxFiltro,
	BoxIcon,
	Container,
	Filtro,
	Icon,
} from './styles';

interface FiltroProps {
	onSearch?: (texto: string) => void;
	onClear?: () => void;
}

const FiltroEmpresa: React.FC<FiltroProps> = ({ onSearch, onClear }) => {
	const [busca, setBusca] = useState('');

	useEffect(() => {
		onSearch(busca);
	}, [busca]);

	onClear = useCallback(() => {
		setBusca('');
	}, [onClear]);

	return (
		<Container>
			<BoxFiltro>
				<BoxIcon>{busca.length <= 0 && <Icon name={'search'} />}</BoxIcon>
				<Filtro
					placeholder={'Buscar...'}
					onChangeText={setBusca}
					value={busca}
				/>
				<BoxClear onPress={onClear}>
					{busca.length > 0 && <Icon name={'x'} />}
				</BoxClear>
			</BoxFiltro>
		</Container>
	);
};

export default FiltroEmpresa;
