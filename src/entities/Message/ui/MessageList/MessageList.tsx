import { useSelector } from 'react-redux';
import {
	getCurrentChatPhone,
	getMessages,
} from '../../../../features/Chat/model/selectors';
import { Message } from '../Message/Message';
import cls from './MessageList.module.scss';

export const MessageList: React.FC = () => {
	const messages = useSelector(getMessages);
	const currentContact = useSelector(getCurrentChatPhone);

	return (
		<div className={cls.MessageList}>
			{messages
				.filter(
					(message) => message.chatId.slice(0, -5) === currentContact,
				)
				.map((message, i) => (
					<Message message={message} key={i} />
				))}
		</div>
	);
};
