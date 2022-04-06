import React, { useState } from 'react';
import {
	BoxClear,
	BoxFiltro,
	BoxIcon,
	Container,
	Filtro,
	Icon,
} from './styles';

interface FiltroProps {
	textoBusca: string;
	onSearch?: (texto: string) => void;
	onClear?: () => void;
}

const FiltroEmpresa: React.FC<FiltroProps> = ({
	textoBusca,
	onSearch,
	onClear,
}) => {
	return (
		<Container>
			<BoxFiltro>
				<BoxIcon>{textoBusca.length <= 0 && <Icon name={'search'} />}</BoxIcon>
				<Filtro
					placeholder={'Buscar...'}
					onChangeText={(textoBusca) => onSearch(textoBusca)}
					value={textoBusca}
				/>
				<BoxClear onPress={onClear}>
					{textoBusca.length > 0 && <Icon name={'x'} />}
				</BoxClear>
			</BoxFiltro>
		</Container>
	);
};

export default FiltroEmpresa;
