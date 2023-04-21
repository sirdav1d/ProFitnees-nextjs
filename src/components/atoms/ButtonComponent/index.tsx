import { Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function ButtonComponent(props: {
	children?: ReactNode;
	variant?: string;
	onOpen?: () => void;
}) {
	return (
		<>
			<Button
				onClick={() => props.onOpen}
				mt='40px'
				fontWeight={'bold'}
				maxW='max-content'
				variant={props.variant ? props.variant : 'primary'}
				type='button'>
				{props.children}
			</Button>
		</>
	);
}
