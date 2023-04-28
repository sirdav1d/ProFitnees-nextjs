import { Link } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

export default function LinkComponent(props: {
	text: string;
	path?: string;
	color?: string;
	setColor: Dispatch<SetStateAction<string | undefined>>;
}) {
	return (
		<>
			<Link
				onClick={() => props.setColor(props.path)}
				p='4px'
				color={props.color}
				href={props.path}
				variant={'primary'}>
				{props.text}
			</Link>
		</>
	);
}
