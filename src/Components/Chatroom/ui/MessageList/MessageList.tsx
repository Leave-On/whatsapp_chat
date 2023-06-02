import { useSelector } from 'react-redux';
import { getCurrentChatPhone, getMessages } from '../../../../features/AuthByCredentials/model/selectors';
import { Message } from '../../model/types';
import { MessageCard } from '../MessageCard/MesageCard';
import cls from './MessageList.module.scss';

interface MessageListProps {
	className?: string;
	messages?: Message[];
}

export const MessageList = ({ className }: MessageListProps) => {
	const messages = useSelector(getMessages)
	const currentContact = useSelector(getCurrentChatPhone)

	return (
		<div className={cls.MessageList}>
			{messages.filter(message => message.chatId.slice(0, -5) === currentContact)
				.map((message, i) => (
				<MessageCard
					message={message.message}
					key={i}
				/>
			))}
		</div>
	);
};
