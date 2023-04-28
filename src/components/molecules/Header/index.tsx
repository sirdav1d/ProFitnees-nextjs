import {
	Image as ChakraImage,
	Flex,
	Link,
	Stack,
	useColorModeValue,
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
				justify={'center'}
				align={'center'}
				p={'20px'}
				bgColor={bgColor}>
				<Flex
					w='100%'
					maxW={['368px', '480px', '620px', '1200px']}
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
			</Flex>
		</>
	);
}
