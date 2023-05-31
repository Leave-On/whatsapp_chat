import { StickyLayout } from '../../../../app/styles/layouts/StickyLayout/StickyLayout';
import { LoginForm } from '../../../../features/AuthByCredentials/ui/ui/LoginForm/LoginForm';
import { ChatroomInput } from '../ChatroomInput/ChatroomInput';
import { MessageList } from '../MessageList/MessageList';
import cls from './Chatroom.module.scss'

interface ChatroomProps {
  className?: string;
}

export const Chatroom = ({className}: ChatroomProps) => {

    return (
    <div className={cls.Chatroom}>
      <StickyLayout
        main={<MessageList />}
        bottom={<ChatroomInput />}
      />
    </div>
  );
}