import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Navigation from '../Navigation';

export default function DrawerMenu() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const bgColor = useColorModeValue('brand.neutral.100', 'brand.neutral.900');
	return (
		<>
			<Button
				onClick={onOpen}
				variant={'unstyled'}
				color='brand.yellow.500'>
				<FiMenu size={'32px'} />
			</Button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent
					bgColor={bgColor}
					zIndex={999999999}>
					<DrawerCloseButton />
					<DrawerHeader>Navegue pelo Site</DrawerHeader>

					<DrawerBody
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Navigation display='column' />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
