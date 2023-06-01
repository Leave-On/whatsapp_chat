import { useSelector } from 'react-redux';
import { getMessages } from '../../../../features/AuthByCredentials/model/selectors';
import { Message } from '../../model/types';
import { MessageCard } from '../MessageCard/MesageCard';
import cls from './MessageList.module.scss';

interface MessageListProps {
	className?: string;
	messages?: Message[];
}

export const MessageList = ({ className }: MessageListProps) => {
	const messages = useSelector(getMessages)

	return (
		<div className={cls.MessageList}>
			{messages.map((message) => (
				<MessageCard
					message={message.message}
					key={message.message}
				/>
			))}
		</div>
	);
};
