import { StyleFunctionProps, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import '@fontsource/poppins';
import { Button, Link } from './components';

const colors = {
	brand: {
		yellow: {
			500: '#FBBA00',
			300: '#FFDE80',
			100: '#FFF2CC',
		},
		red: {
			500: '#D52B1E',
			300: '#E6574C',
			100: '#EF968F',
		},
		neutral: {
			900: '#010101',
			800: '#404040',
			700: '#808080',
			500: '#BFBFBF',
			300: '#E6E6E6',
			100: '#F2F2F2',
		},
	},
};

const fonts = {
	heading: `'Poppins', sans-serif`,
	body: `'Poppins', sans-serif`,
	mono: `'Poppins', sans-serif`,
};

export const theme = extendTheme({
	config: {
		initialColorMode: 'system',
		disableTransitionOnChange: false,
	},
	colors,
	components: {
		Button,
		Link,
	},
	fonts,
	styles: {
		global: (props: StyleFunctionProps) => ({
			'html, body, *': {
				scrollMarginTop: '120px',
				scrollBehavior: 'smooth',
			},
			body: {
				bg: mode('brand.neutral.100', 'brand.neutral.900')(props),
				scrollBehavior: 'smooth',
				'::-webkit-scrollbar': {
					width: '12px',
					backgroundColor: 'brand.neutral.300',
				},

				'::-webkit-scrollbar-track': {
					boxShadow: '0 0 8px brand.neutral.900',
				},

				'::-webkit-scrollbar-thumb': {
					backgroundColor: 'brand.neutral.800',
					borderRadius: '2px',
					height: '2px',
				},
			},
		}),
	},
});
