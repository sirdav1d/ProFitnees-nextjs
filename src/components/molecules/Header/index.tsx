import {
	Flex,
	Link,
	Stack,
	useColorModeValue,
	Image as ChakraImage,
} from '@chakra-ui/react';
import Image from 'next/image';

import logoD from '../../../../public/logos/logoDarkMode.svg';
import logoW from '../../../../public/logos/logoWhiteMode.svg';
import DrawerMenu from '../DrawerMenu';
import Navigation from '../Navigation';

export default function Header() {
	const logo = useColorModeValue(logoW, logoD);
	const bgColor = useColorModeValue('brand.neutral.100', 'brand.neutral.900');
	return (
		<>
			<Flex
				pos={'fixed'}
				w='100%'
				zIndex={999}
				shadow={'lg'}
				align={'center'}
				bgColor={bgColor}
				p={['20px', '20px 40px', '20px 80px', '16px 180px']}
				justify={'space-between'}>
				<Link href='/'>
					<ChakraImage
						as={Image}
						w={['140px', '140px', '140px', '200px']}
						h='auto'
						src={logo}
						alt={'Logo'}
					/>
				</Link>
				<Stack display={['none', 'none', 'none', 'none', 'flex']}>
					<Navigation display='row' />
				</Stack>
				<Stack display={['flex', 'flex', 'flex', 'flex', 'none']}>
					<DrawerMenu />
				</Stack>
			</Flex>
		</>
	);
}
