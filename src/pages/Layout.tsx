import Header from '@/components/molecules/Header';
import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
	return (
		<Flex flexDir={'column'}>
			<Header />
			{props.children}
		</Flex>
	);
}
