import BenefitsSection from '@/components/organisms/BenefitsSection';
import HeroSection from '@/components/organisms/HeroSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import PlanSection from '@/components/organisms/PlanSection';
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
			<PlanSection />
		</Flex>
	);
}
