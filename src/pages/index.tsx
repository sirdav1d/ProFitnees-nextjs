import PersonTitle from '@/components/atoms/PersonTitle';
import HeroSection from '@/components/organisms/HeroSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import BenefitsSection from '@/components/organisms/BenefitsSection';
import {
	Flex,
	useColorModeValue,
	Image as ChakraImage,
	Text,
} from '@chakra-ui/react';

import Image from 'next/image';
import Benefits from '/public/images/beneficios.svg';
import { FiCheckCircle } from 'react-icons/fi';
import ButtonComponent from '@/components/atoms/ButtonComponent';
import '@fontsource/poppins';

export default function Home() {
	const color = useColorModeValue('brand.neutral.900', 'brand.neutral.100');
	const colorCard = useColorModeValue('brand.neutral.300', 'brand.neutral.800');
	return (
		<Flex
			flexDir={'column'}
			gap='60px'>
			<HeroSection />
			<ServicesSection />
			<BenefitsSection />
			<Flex
				id='planos'
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
					text='Confira nossos planos e comece sua jornada Fitness'
					size={'28px'}
					color={color}
				/>
			</Flex>
		</Flex>
	);
}
