import LinkComponent from '@/components/atoms/LinkComponent';
import Switcher from '@/components/atoms/Switcher';
import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export default function Navigation(props: { display: 'column' | 'row' }) {
	const [color, setColor] = useState('#inicio');

	function handleClick(key: string) {
		setColor(key);
		console.log(color);
	}

	return (
		<Flex
			gap='12px'
			flexDir={props.display ? props.display : 'row'}
			alignItems={'center'}>
			<Button
				m='0px'
				p='0px'
				fontWeight={'medium'}
				variant={'unstyled'}
				onClick={() => handleClick('#inicio')}>
				<LinkComponent
					color={color === '#inicio' ? 'brand.yellow.500' : ''}
					key={'#inicio'}
					path='#inicio'
					text='Início'
				/>
			</Button>

			<Button
				m='0px'
				p='0px'
				fontWeight={'medium'}
				variant={'unstyled'}
				onClick={() => handleClick('#servicos')}>
				<LinkComponent
					color={color === '#servicos' ? 'brand.yellow.500' : ''}
					key={'#servicos'}
					path='#servicos'
					text='Serviços'
				/>
			</Button>

			<Button
				m='0px'
				p='0px'
				fontWeight={'medium'}
				variant={'unstyled'}
				onClick={() => handleClick('#beneficios')}>
				<LinkComponent
					color={color === '#beneficios' ? 'brand.yellow.500' : ''}
					key={'#beneficios'}
					path='#beneficios'
					text='Benefícios'
				/>
			</Button>

			<Button
				m='0px'
				p='0px'
				fontWeight={'medium'}
				variant={'unstyled'}
				onClick={() => handleClick('#planos')}>
				<LinkComponent
					color={color === '#planos' ? 'brand.yellow.500' : ''}
					key={'#planos'}
					path='#planos'
					text='Planos'
				/>
			</Button>

			<Button
				m='0px'
				p='0px'
				w='fit-content'
				fontWeight={'medium'}
				variant={'unstyled'}
				onClick={() => handleClick('#contato')}>
				<LinkComponent
					color={color === '#contato' ? 'brand.yellow.500' : ''}
					key={'#contato'}
					path='#contato'
					text='Contato'
				/>
			</Button>

			<Switcher />
		</Flex>
	);
}
