import Footer from '@/components/molecules/Footer';
import Header from '@/components/molecules/Header';
import { Flex } from '@chakra-ui/react';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
	return (
		<Flex flexDir={'column'}>
			<Header />
			{props.children}
			<Footer />
		</Flex>
	);
}
