import HeroSection from '@/components/organisms/HeroSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import { Flex, useColorModeValue } from '@chakra-ui/react';

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
