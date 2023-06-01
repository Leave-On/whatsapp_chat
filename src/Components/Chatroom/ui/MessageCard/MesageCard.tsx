import cls from './MesageCard.module.scss';
import { Card } from '../../../../shared/ui/Card/ui/Card';
import { Message } from '../../model/types';

interface MesageCardProps {
	className?: string;
	message?: string;
	contactName?: string;
}

export const MessageCard = ({ className, message, contactName }: MesageCardProps) => {
	return (
		<Card variant="message">
			<div>{contactName}</div>
			<div>{message}</div>
		</Card>
	);
};
