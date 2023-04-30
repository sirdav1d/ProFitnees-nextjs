import { motion } from 'framer-motion';

export const FadeAnimation = {
	hidden: { opacity: 0, x: '-5%' },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const TextAnimation = {
	hidden: { opacity: 0, x: '-5%' },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: .5 } },
};

export const GrowAnimation = {
	hidden: { opacity: 0, width: 0 },
	visible: {
		opacity: 1,
		width: '60px',
		transition: { duration: 0.5, delay: 0.3 },
	},
};

export const CardAnimation = {
	hidden: { opacity: 0, y: '100px' },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

export const BenefitsAnimation = {
	start: { y: 0 },
	end: {
		boxShadow: '-24px 24px 0px #FBBA00',
		y: '-28px',
		transition: { duration: 0.5, staggerChildren: 0.5 },
	},
};
