import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function ButtonComponent(props: {
	children?: ReactNode;
	variant?: string;
	onOpen?: () => void;
	margin: string
}) {
	return (
		<>
			<Button
				onClick={() => props.onOpen}
				mt= {props.margin}
				fontWeight={'bold'}
				maxW='max-content'
				variant={props.variant ? props.variant : 'primary'}
				type='button'>
				{props.children}
			</Button>
		</>
	);
}
