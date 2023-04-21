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

export default function CardComponent(props: {
	image: string;
	name: string;
	title: string;
	text: string;
}) {
	const color = useColorModeValue('brand.neutral.800', 'brand.neutral.300');
	const colorTitle = useColorModeValue(
		'brand.neutral.900',
		'brand.neutral.100',
	);

	const colorCard = useColorModeValue('brand.neutral.300', 'brand.neutral.800');
	return (
		<>
			<Card
				shadow={'lg'}
				overflow={'hidden'}
				transform={'auto'}
				transition={'all, .3s ease'}
				_hover={{ translateY: '-10px', shadow: 'dark-lg', scale: 1.05 }}
				bgColor={colorCard}
				maxW='sm'
				mt='40px'>
				<CardBody p='0px'>
					<ChakraImage
						as={Image}
						w='100%'
						objectFit={'cover'}
						h='250px'
						src={props.image}
						alt={props.name}
					/>
					<Flex
						flexDir={'column'}
						align={'center'}
						p='20px'
						justify={'center'}>
						<Stack
							mt='2'
							spacing='3'>
							<Box m='0 auto'>
								<PersonTitle
									size='20px'
									text={props.title}
									color={colorTitle}
								/>
							</Box>
							<Text
								fontSize={'16px'}
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
