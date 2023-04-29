import BenefitsSection from '@/components/organisms/BenefitsSection';
import HeroSection from '@/components/organisms/HeroSection';
import PlanSection from '@/components/organisms/PlanSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import { Flex } from '@chakra-ui/react';
import '@fontsource/poppins';

export default function Home() {
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
