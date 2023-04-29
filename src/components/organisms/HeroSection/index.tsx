import ButtonComponent from '@/components/atoms/ButtonComponent';
import PersonTitle from '@/components/atoms/PersonTitle';
import { FadeAnimation } from '@/styles/animations';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import banner from '/public/images/banner.svg';

export default function HeroSection() {
	return (
		<Flex
			id='inicio'
			mt='60px'
			height={'70vh'}
			flexDir={'column'}
			p={'20px'}
			align={'center'}
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
				w={'100%'}
				maxW={['368px', '368px', '480px', '1200px']}
				gap='4px'
				align={'left'}>
				<PersonTitle
					weight='900'
					key={'h1'}
					text='Fortaleça seu corpo e sua mente'
					size={'48px'}
					spanSize='120px'
					color={'brand.neutral.100'}
				/>
				<Text
					as={motion.p}
					variants={FadeAnimation}
					whileInView='visible'
					viewport={{ once: true }}
					initial='hidden'
					fontSize={'24px'}
					fontWeight={'700'}
					color={'brand.neutral.300'}>
					Descubra do que você é capaz!
				</Text>
				<ButtonComponent
					key={'b1'}
					margin={'40px'}>
					Agendar Visita
				</ButtonComponent>
			</Flex>
		</Flex>
	);
}
