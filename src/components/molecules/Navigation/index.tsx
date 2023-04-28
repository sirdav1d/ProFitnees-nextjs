import LinkComponent from '@/components/atoms/LinkComponent';
import Switcher from '@/components/atoms/Switcher';
import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export default function Navigation(props: { display: 'column' | 'row' }) {
	const [color, setColor] = useState<string | undefined>('#inicio');

	return (
		<Flex
			gap='12px'
			flexDir={props.display ? props.display : 'row'}
			alignItems={'center'}>
			<LinkComponent
				setColor={setColor}
				color={color === '#inicio' ? 'brand.yellow.500' : ''}
				key={'#inicio'}
				path='#inicio'
				text='Início'
			/>

			<LinkComponent
				setColor={setColor}
				color={color === '#servicos' ? 'brand.yellow.500' : ''}
				key={'#servicos'}
				path='#servicos'
				text='Serviços'
			/>

			<LinkComponent
				setColor={setColor}
				color={color === '#beneficios' ? 'brand.yellow.500' : ''}
				key={'#beneficios'}
				path='#beneficios'
				text='Benefícios'
			/>

			<LinkComponent
				setColor={setColor}
				color={color === '#planos' ? 'brand.yellow.500' : ''}
				key={'#planos'}
				path='#planos'
				text='Planos'
			/>

			<LinkComponent
				setColor={setColor}
				color={color === '#contato' ? 'brand.yellow.500' : ''}
				key={'#contato'}
				path='#contato'
				text='Contato'
			/>

			<Switcher />
		</Flex>
	);
}
