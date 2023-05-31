import cls from './MesageCard.module.scss';
import { Card } from '../../../../shared/ui/Card/ui/Card';
import { Message } from '../../model/types';

interface MesageCardProps {
	className?: string;
	message?: Message;
}

export const MessageCard = ({ className, message }: MesageCardProps) => {
	return (
		<Card variant="message">
			<div>{message?.name}</div>
			<div>{message?.text}</div>
		</Card>
	);
};
