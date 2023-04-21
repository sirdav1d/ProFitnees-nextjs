import { Switch, useColorMode } from '@chakra-ui/react';

export default function Switcher() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div>
			<Switch
				colorScheme='red'
				value={colorMode}
				onChange={toggleColorMode}
			/>
		</div>
	);
}
