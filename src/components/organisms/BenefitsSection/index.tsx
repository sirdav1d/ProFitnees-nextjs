import PersonTitle from '@/components/atoms/PersonTitle';
import {
	Image as ChakraImage,
	Flex,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import ButtonComponent from '@/components/atoms/ButtonComponent';
import '@fontsource/poppins';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import Benefits from '/public/images/beneficios.svg';

export default function BenefitsSection() {
	const color = useColorModeValue('brand.neutral.900', 'brand.neutral.100');
	const colorText = useColorModeValue('brand.neutral.800', 'brand.neutral.300');
	const colorCard = useColorModeValue('brand.neutral.300', 'brand.neutral.800');
	return (
		<Flex
			id='beneficios'
			p={'20px'}
			align={'center'}
			flexDir={'column'}
			maxW='1200px'
			w={'100%'}
			m='0px auto'>
			<PersonTitle
				spanSize='80px'
				weight='800'
				key={'h2'}
				text='Alguns dos nossos benefícios'
				size={'28px'}
				color={color}
			/>
			<Flex
				mt='40px'
				bgColor={colorCard}
				gap='24px'
				borderRadius={'md'}
				h='320px'
				transition={'all 0.3s ease'}
				transform={'auto'}
				shadow={'xl'}
				_hover={{ shadow: '-24px 24px 0px #FBBA00', translateY: '-20px' }}
				align={'center'}>
				<ChakraImage
					as={Image}
					w='50%'
					objectFit={'cover'}
					borderRadius={'md'}
					h='320px'
					src={Benefits}
					alt='Mulheres Sorrindo na academia'
				/>
				<Flex
					w='50%'
					flexDir={'column'}
					p='20px'
					h='320px'
					justify={'space-between'}>
					<Flex
						align={'center'}
						gap='12px'>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							fontSize={'md'}
							color={colorText}
							fontWeight={'semibold'}>
							Variedade de equipamentos e atividades
						</Text>
					</Flex>
					<Flex
						align={'center'}
						gap='12px'>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							color={colorText}
							fontSize={'md'}
							fontWeight={'semibold'}>
							Flexibilidade de horários
						</Text>
					</Flex>
					<Flex
						align={'center'}
						gap='12px'>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							color={colorText}
							fontWeight={'semibold'}
							fontSize={'md'}>
							Acesso a treinadores e instrutores qualificados
						</Text>
					</Flex>
					<Flex
						align={'center'}
						gap='12px'>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							color={colorText}
							fontWeight={'semibold'}
							fontSize={'md'}>
							Ambiente seguro e motivador
						</Text>
					</Flex>
					<Flex
						align={'center'}
						gap='12px'>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							color={colorText}
							fontWeight={'semibold'}
							fontSize={'md'}>
							Preços acessíveis
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<ButtonComponent>Começar agora</ButtonComponent>
		</Flex>
	);
}
