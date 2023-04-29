import { FadeAnimation, GrowAnimation } from '@/styles/animations';
import { Flex, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function PersonTitle(props: {
	text: string;
	size: string;
	color?: string;
	spanSize?: string;
	weight: string;
}) {
	return (
		<Flex flexDir={'column'}>
			<motion.span
				variants={GrowAnimation}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				style={{
					width: props.spanSize,
					height: '8px',
					backgroundColor: '#FBBA00',
					borderRadius: '24px',
				}}
			/>
			<Heading
				as={motion.h2}
				variants={FadeAnimation}
				viewport={{ once: true }}
				initial='hidden'
				whileInView='visible'
				lineHeight={1.1}
				color={props.color}
				fontWeight={props.weight}
				fontSize={props.size}>
				{props.text}
			</Heading>
		</Flex>
	);
}
