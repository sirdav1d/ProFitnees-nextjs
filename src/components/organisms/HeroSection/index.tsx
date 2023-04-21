import ButtonComponent from '@/components/atoms/ButtonComponent';
import PersonTitle from '@/components/atoms/PersonTitle';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import banner from '/public/images/banner.svg';
import '@fontsource/poppins/800.css';

export default function HeroSection() {
	return (
		<Flex
			id='inicio'
			mt='60px'
			height={'70vh'}
			flexDir={'column'}
			align={'left'}
			pos={'relative'}
			backgroundColor={'rgba(0,0,0,0.6)'}
			justify={'center'}>
			<Image
				style={{
					objectFit: 'cover',
					width: '100%',
					height: '100%',
					zIndex: -1,
					position: 'absolute',
				}}
				priority
				src={banner}
				alt='banner'
			/>

			<Flex
				flexDir={'column'}
				gap='4px'
				p={['20px', '20px 40px', '20px 80px', '16px 180px']}>
				<PersonTitle
					key={'h1'}
					text='Fortaleça seu corpo e sua mente'
					size={'36px'}
					color={'brand.neutral.100'}
				/>
				<Text
					fontSize={'20px'}
					color={'brand.neutral.300'}>
					Descubra do que você é capaz!
				</Text>
				<ButtonComponent key={'b1'}>Agendar Visita</ButtonComponent>
			</Flex>
		</Flex>
	);
}
