import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const Button = defineStyleConfig({
	baseStyle: {
		fontsize: '16px',
		fontWeight: 'bold',
		textTransform: 'capitalize',
		borderRadius: '4px',
		padding: '16px',
		color: 'brand.neutral.100',
		transition: 'all .3s ease',
	},
	variants: {
		primary: {
			bgColor: 'brand.red.500',

			_hover: {
				bgColor: 'brand.red.300',
			},
			_active: {
				bgColor: 'brand.red.100',
				shadow: 'lg',
			},
		},
	},
});

export const Link = defineStyleConfig({
	baseStyle: {
		fontsize: '16px',
		fontWeight: 'regular',
		textTransform: 'capitalize',
		color: mode('brand.neutral.900', 'brand.neutral.100'),
		transition: 'all .25s ease',
		textDecorationLine: 'none',
	},
	variants: {
		primary: {
			bgColor: 'transparent',

			_hover: {
				color: 'brand.yellow.500',
				textDecorationLine: 'none',
			},
			_active: {
				color: 'brand.yellow.500',
				textShadow: 'lg',
			},
			_focusWithin: {
				color: 'brand.yellow.500',
			},
			_focusVisible: {
				color: 'brand.yellow.500',
			},
			_focus: {
				color: 'brand.yellow.500',
			},
		},
	},
});
