import { StickyLayout } from '../../../../app/styles/layouts/StickyLayout/StickyLayout';
import { ChatroomInput } from '../../../../features/ChatroomInput/ChatroomInput';
import { MessageList } from '../../../../entities/Message/ui/MessageList/MessageList';
import cls from './Chatroom.module.scss';

export const Chatroom: React.FC = () => {
	return (
		<div className={cls.Chatroom}>
			<StickyLayout main={<MessageList />} bottom={<ChatroomInput />} />
		</div>
	);
};
