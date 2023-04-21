import { Link } from '@chakra-ui/react';

export default function LinkComponent(props: {
	text: string;
	path?: string;
	color?: string;
}) {
	return (
		<>
			<Link
				color={props.color}
				href={props.path}
				variant={'primary'}>
				{props.text}
			</Link>
		</>
	);
}
