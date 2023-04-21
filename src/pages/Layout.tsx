import Header from '@/components/molecules/Header';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
	
	return (
		<Flex
			flexDir={'column'}
		>
			<Header />
			{props.children}
		</Flex>
	);
}
