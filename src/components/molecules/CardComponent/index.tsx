import PersonTitle from '@/components/atoms/PersonTitle';
import {
	Box,
	Card,
	CardBody,
	Image as ChakraImage,
	Flex,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CardAnimation } from '@/styles/animations';

export default function CardComponent(props: {
	image: string;
	name: string;
	title: string;
	text: string;
}) {
	const color = useColorModeValue('brand.neutral.800', 'brand.neutral.300');
	const colorTitle = useColorModeValue(
		'brand.neutral.800',
		'brand.neutral.300',
	);

	const colorCard = useColorModeValue('brand.neutral.300', 'brand.neutral.800');
	return (
		<>
			<Card
				as={motion.div}
				cursor={'pointer'}
				variants={CardAnimation}
				whileInView='visible'
				initial='hidden'
				viewport={{ once: true, amount:.3 }}
				shadow={'md'}
				overflow={'hidden'}
				border='2px solid'
				borderColor='transparent'
				transform={'auto'}
				transition={'all, .3s ease'}
				_hover={{
					translateY: '-10px',
					shadow: 'xl',
					scale: 1.05,
					borderColor: 'brand.yellow.500',
				}}
				bgColor={colorCard}
				maxW='xs'
				w={'100%'}
				h='400px'
				mt='40px'>
				<CardBody
					p='0px'
					display={'flex'}
					flexDir={'column'}
					justifyContent={'space-between'}>
					<ChakraImage
						as={Image}
						w='100%'
						objectFit={'cover'}
						h='168px'
						transition={'all .3s ease'}
						_hover={{ scale: 1.9 }}
						src={props.image}
						alt={props.name}
					/>
					<Flex
						h='100%'
						flexDir={'column'}
						align={'center'}
						p='16px 20px'
						justify={'center'}>
						<Stack spacing='2'>
							<Box m='0 auto'>
								<PersonTitle
									spanSize='40px'
									weight='700'
									size='20px'
									text={props.title}
									color={colorTitle}
								/>
							</Box>
							<Text
								fontSize={'14px'}
								color={color}>
								{props.text}
							</Text>
						</Stack>
					</Flex>
				</CardBody>
			</Card>
		</>
	);
}
