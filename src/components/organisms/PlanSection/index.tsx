import ButtonComponent from '@/components/atoms/ButtonComponent';
import PersonTitle from '@/components/atoms/PersonTitle';
import {
	Image as ChakraImage,
	Flex,
	Input,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Flashcircle from '/public/icons/flashcircle.svg';
import Flashy from '/public/icons/flashy.svg';

import '@fontsource/poppins';

export default function PlanSection() {
	const color = useColorModeValue('brand.neutral.900', 'brand.neutral.100');
	const bgColor = useColorModeValue('brand.yellow.300', 'brand.yellow.500');

	return (
		<>
			<Flex
				id='planos'
				p={'20px'}
				align={'center'}
				justify={'center'}
				flexDir={'column'}
				maxW={['368px', '368px', '480px', '1200px']}
				w={'100%'}
				m='0px auto'>
				<PersonTitle
					spanSize='80px'
					weight='800'
					key={'h2'}
					text='Confira nossos planos e comece sua jornada Fitness'
					size={'28px'}
					color={color}
				/>
				<Flex
					gap='40px'
					flexDir={['column', 'column', 'column', 'row']}
					align={'center'}
					justify={'center'}
					w='100%'
					mt='40px'>
					<Flex
						borderRadius={'md'}
						bgColor='brand.neutral.800'
						color='brand.neutral.300'
						p='20px'
						gap='24px'
						maxW='300px'
						w='100%'
						pos='relative'
						h='360px'
						align={'center'}
						justify={'center'}
						flexDir={'column'}>
						<ChakraImage
							as={Image}
							h='100px'
							src={Flashcircle}
							alt='Flash Circulado'
							filter={'auto'}
							transform={'auto'}
							dropShadow='0px 0px 12px #FBBA00'
						/>
						<Flex
							gap='12px'
							flexDir={'column'}
							align={'center'}
							h='100%'
							justify={'space-between'}>
							<PersonTitle
								text={'Plano Standard'}
								size={'24px'}
								weight={'semibold'}
								spanSize='40px'
							/>
							<Text>
								Plano ideal para quem precisa de treinos personalizados e
								valoriza o custo benefício!
							</Text>
							<ButtonComponent margin='4px'>Saiba Mais</ButtonComponent>
						</Flex>
					</Flex>
					<Flex
						borderRadius={'md'}
						bgColor='brand.neutral.800'
						color='brand.neutral.300'
						p='20px'
						gap='24px'
						maxW='300px'
						w='100%'
						h='360px'
						align={'center'}
						flexDir={'column'}>
						<ChakraImage
							as={Image}
							h='80px'
							filter={'auto'}
							src={Flashy}
							dropShadow='0px 0px 12px #FBBA00'
							alt='Flash Com Listras'
						/>

						<Flex
							gap='12px'
							flexDir={'column'}
							align={'center'}
							h='100%'
							justify={'space-between'}>
							<PersonTitle
								text={'Plano Premium'}
								size={'24px'}
								weight={'semibold'}
								spanSize='40px'
							/>
							<Text>
								Plano ideal para quem precisa de treinos personalizados e
								valoriza o custo benefício!
							</Text>
							<ButtonComponent margin='4px'>Saiba Mais</ButtonComponent>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				flexDir={['column', 'column', 'column', 'row']}
				id='contato'
				bgColor={bgColor}
				p={['20px', '20px', '20px', '48px']}
				w='100%'
				align={'center'}
				justify={'center'}
				gap={['20px', '20px', '20px', '40px']}>
				<Input
					bgColor={'brand.neutral.300'}
					w='340px'
					color='brand.neutral.900'
					type='text'
					placeholder='Digite seu e-mail'
					outline={'none'}
					border={'none'}
					_placeholder={{ color: 'brand.neutral.700' }}
					transition={'all 0.3s ease'}
					_focusVisible={{
						border: 'none',
						outline: '1px solid #FBBA00',
						shadow: '0px 0px 4px #FBBA00',
					}}
				/>
				<ButtonComponent margin='0px'>Entrar em Contato</ButtonComponent>
			</Flex>
		</>
	);
}
