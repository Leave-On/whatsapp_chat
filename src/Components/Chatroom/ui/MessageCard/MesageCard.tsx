import cls from './MesageCard.module.scss';
import { Card } from '../../../../shared/ui/Card/ui/Card';
import { Message } from '../../../../app/types';

interface MesageCardProps {
	className?: string;
	message: Message;
	contactName?: string;
}

export const MessageCard = ({ className, message, contactName }: MesageCardProps) => {
	return (
		<Card variant="message" messageType={message.type}>
			{/* <div>{contactName}</div> */}
			<div>{message?.message}</div>
		</Card>
	);
};
