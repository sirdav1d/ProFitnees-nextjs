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
import { motion } from 'framer-motion';
import { BenefitsAnimation } from '@/styles/animations';

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
				as={motion.div}
				mt='60px'
				bgColor={colorCard}
				gap='24px'
				borderRadius={'md'}
				h='320px'
				transition={'all 0.3s ease'}
				transform={'auto'}
				shadow={'xl'}
				variants={BenefitsAnimation}
				whileInView='end'
				initial='start'
				viewport={{ once: true, amount: 0.8 }}
				align={'center'}>
				<ChakraImage
					as={Image}
					display={['none', 'none', 'none', 'flex']}
					w='50%'
					objectFit={'cover'}
					borderRadius={'md'}
					h='320px'
					src={Benefits}
					alt='Mulheres Sorrindo na academia'
				/>
				<Flex
					w={['100%', '100%', '100%', '50%']}
					flexDir={'column'}
					p={['16px', '20px']}
					h='320px'
					justify={'space-between'}>
					<Flex
						align={'center'}
						w='100%'
						gap='12px'>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							fontSize={['sm', 'sm', 'md']}
							color={colorText}
							fontWeight={'semibold'}>
							Variedade de equipamentos
						</Text>
					</Flex>
					<Flex
						align={'center'}
						w='100%'
						gap='12px'>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							color={colorText}
							fontSize={['sm', 'sm', 'md']}
							fontWeight={'semibold'}>
							Flexibilidade de horários
						</Text>
					</Flex>
					<Flex
						align={'center'}
						gap={'12px'}
						w='100%'>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							color={colorText}
							fontWeight={'semibold'}
							fontSize={['sm', 'sm', 'md']}>
							Acesso a instrutores qualificados
						</Text>
					</Flex>
					<Flex
						align={'center'}
						w='100%'
						gap={'12px'}>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							color={colorText}
							fontWeight={'semibold'}
							fontSize={['sm', 'sm', 'md']}>
							Ambiente seguro e motivador
						</Text>
					</Flex>
					<Flex
						align={'center'}
						w='100%'
						gap={'12px'}>
						<FiCheckCircle
							size={'20px'}
							color='#FBBA00'
						/>
						<Text
							color={colorText}
							fontWeight={'semibold'}
							fontSize={['sm', 'sm', 'md']}>
							Preços acessíveis
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<ButtonComponent margin={'40px'}>Começar agora</ButtonComponent>
		</Flex>
	);
}
