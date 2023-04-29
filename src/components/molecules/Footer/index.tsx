import {
	Button,
	Divider,
	Flex,
	Link,
	Text,
	Image as ChakraImage,
	useColorModeValue,
} from '@chakra-ui/react';

import logoD from '/public/logos/logoDarkMode.svg';
import Image from 'next/image';
export default function Footer() {
	return (
		<Flex
			flexDir={'column'}
			bgColor={'brand.neutral.800'}
			color='brand.neutral.100'
			p='24px'
			align={'center'}
			pos='relative'
			justify={'center'}
			gap='20px'>
			<ChakraImage
				pos={'absolute'}
				opacity={0.1}
				display={['none', 'none', 'none', 'block']}
				w='840px'
				as={Image}
				src={logoD}
			/>
			<Flex>Redes Sociais</Flex>
			<Divider />
			<Flex
				gap='12px'
				flexDir={['column', 'column', 'column', 'row']}>
				<Button
					variant={'unstyled'}
					href='#inicio'
					as={Link}>
					Home
				</Button>
				<Button
					variant={'unstyled'}
					href='#servicos'
					as={Link}>
					Serviços
				</Button>
				<Button
					variant={'unstyled'}
					href='#beneficios'
					as={Link}>
					Benefícios
				</Button>
				<Button
					variant={'unstyled'}
					href='#planos'
					as={Link}>
					Planos
				</Button>
				<Button
					variant={'unstyled'}
					href='#contato'
					as={Link}>
					Contato
				</Button>
				<Button
					variant={'unstyled'}
					disabled={true}
					as={Link}>
					Política de Privacidade
				</Button>
			</Flex>
			<Divider />
			<Text
				fontWeight={'thin'}
				fontStyle={'italic'}>
				Desenvolvido por David Diniz Dos Santos
			</Text>
		</Flex>
	);
}
