import ButtonComponent from '@/components/atoms/ButtonComponent';
import PersonTitle from '@/components/atoms/PersonTitle';
import CardComponent from '@/components/molecules/CardComponent';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import fitDance from '/public/images/fitDance.svg';
import funcional from '/public/images/funcional.svg';
import hipertrofia from '/public/images/hipertrofia.svg';
import { motion } from 'framer-motion';
import { CardAnimation } from '@/styles/animations';

export default function ServicesSection() {
	const color = useColorModeValue('brand.neutral.900', 'brand.neutral.100');

	return (
		<Flex
			id='servicos'
			p={'20px'}
			align={'center'}
			flexDir={'column'}
			w={'100%'}
			m='0px auto'>
			<PersonTitle
				spanSize='80px'
				weight='800'
				key={'h2'}
				text='Conheça nossos treinos personalizados'
				size={'28px'}
				color={color}
			/>
			<Flex
			
				w={'100%'}
				maxW={['368px', '368px', '480px', '1200px']}
				align={'center'}
				justify={'space-between'}
				flexDir={['column', 'column', 'column', 'column', 'row']}>
				<CardComponent
					image={hipertrofia}
					name={'Hipertrofia'}
					title={'Treino de Hipertrofia'}
					text={
						'Um treino focado em hipertrofia é fundamental para quem busca aumentar a massa muscular e ter um corpo mais definido e forte. Para alcançar esse objetivo, é importante seguir um programa de treino bem estruturado.'
					}
				/>
				<CardComponent
					image={funcional}
					name={'Funcional'}
					title={'Treino Funcional'}
					text={
						'Ao incorporar o treinamento funcional em sua rotina de exercícios, você pode melhorar sua saúde geral e qualidade de vida, ao mesmo tempo em que se diverte experimentando novos desafios.'
					}
				/>
				<CardComponent
					image={fitDance}
					name={'Fit Dance'}
					title={'Fit Dance'}
					text={
						' Fit dance é uma forma de exercício que combina movimentos de dança com exercícios aeróbicos. Uma aula de 60 minutos pode queimar de 400 a 600 calorias, dependendo da intensidade.'
					}
				/>
			</Flex>
			<ButtonComponent margin='40px'>Falar com instrutor</ButtonComponent>
		</Flex>
	);
}
