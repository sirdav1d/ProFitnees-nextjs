import { Flex, Heading } from '@chakra-ui/react';

export default function PersonTitle(props: {
	text: string;
	size: string;
	color?: string;
	spanSize?: string;
	weight: string;
}) {
	return (
		<Flex flexDir={'column'}>
			<span
				style={{
					width: props.spanSize,
					height: '8px',
					backgroundColor: '#FBBA00',
					borderRadius: '24px',
				}}
			/>
			<Heading
			lineHeight={1.15}
				color={props.color}
				fontWeight={props.weight}
				fontSize={props.size}>
				{props.text}
			</Heading>
		</Flex>
	);
}
