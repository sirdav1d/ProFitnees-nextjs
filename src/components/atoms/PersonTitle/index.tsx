import { Flex, Heading } from '@chakra-ui/react';

export default function PersonTitle(props: {
	text: string;
	size: string;
	color?: string;
	spanSize?: string;
}) {
	return (
		<Flex flexDir={'column'}>
			<span
				style={{
					width: '64px',
					height: '8px',
					backgroundColor: '#FBBA00',
					borderRadius: '24px',
				}}
			/>
			<Heading
				color={props.color}
				fontWeight={'black'}
				fontSize={props.size}>
				{props.text}
			</Heading>
		</Flex>
	);
}
