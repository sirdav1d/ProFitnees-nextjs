import ButtonComponent from '@/components/atoms/ButtonComponent';
import PersonTitle from '@/components/atoms/PersonTitle';
import CardComponent from '@/components/molecules/CardComponent';
import HeroSection from '@/components/organisms/HeroSection';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import fitDance from '/public/images/fitDance.svg';
import funcional from '/public/images/funcional.svg';
import hipertrofia from '/public/images/hipertrofia.svg';
import ServicesSection from '@/components/organisms/ServicesSection';

export default function Home() {
	const color = useColorModeValue('brand.neutral.900', 'brand.neutral.100');
	return (
		<Flex
			flexDir={'column'}
			gap='80px'>
			<HeroSection />
			<ServicesSection />
		</Flex>
	);
}
