import { Card } from '@/shared/ui/Card/ui/Card';
import { IMessage } from '../../model/types/message';

interface MesageProps {
	message: IMessage;
}

export const Message: React.FC<MesageProps> = ({ message }) => {
	return (
		<Card variant="message" messageType={message.direction}>
			<div>{message?.message}</div>
		</Card>
	);
};
