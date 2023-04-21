import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../styles/theme';
import Layout from './Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>{' '}
				<meta
					name='description'
					content='Academia Fictícia criada com intuito de aprendizagem e treinamento em NextJS'
				/>
				<link
					rel='icon'
					href='/icons/favicon.svg'
				/>
				<title>Academia ProFitnees</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}
