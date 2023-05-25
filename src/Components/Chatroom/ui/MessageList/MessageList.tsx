import { Message } from '../../model/types';
import { MessageCard } from '../MessageCard/MesageCard';
import cls from './MessageList.module.scss'

interface MessageListProps {
  className?: string;
  messages?: Message[];
}

export const MessageList = ({className}: MessageListProps) => {

    const messages = [
        {
            id: 1, name: 'Jack', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deleniti cumque dignissimos accusamus doloremque iusto velit eligendi magnam tempore, ullam, quos suscipit, facere ex delectus. Sapiente dicta velit obcaecati consectetur.'
        },
        {
            id: 1, name: 'Newton', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deleniti cumque dignissimos accusamus doloremque iusto velit eligendi magnam tempore, ullam, quos suscipit, facere ex delectus. Sapiente dicta velit obcaecati consectetur.'
        },
        {
            id: 1, name: 'Jack', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deleniti cumque dignissimos accusamus doloremque iusto velit eligendi magnam tempore, ullam, quos suscipit, facere ex delectus. Sapiente dicta velit obcaecati consectetur.'
        },
        {
            id: 1, name: 'Newton', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deleniti cumque dignissimos accusamus doloremque iusto velit eligendi magnam tempore, ullam, quos suscipit, facere ex delectus. Sapiente dicta velit obcaecati consectetur.'
        },
        {
            id: 1, name: 'Jack', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deleniti cumque dignissimos accusamus doloremque iusto velit eligendi magnam tempore, ullam, quos suscipit, facere ex delectus. Sapiente dicta velit obcaecati consectetur.'
        },
        {
            id: 1, name: 'Newton', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deleniti cumque dignissimos accusamus doloremque iusto velit eligendi magnam tempore, ullam, quos suscipit, facere ex delectus. Sapiente dicta velit obcaecati consectetur.'
        },
        {
            id: 1, name: 'Silvestr', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deleniti cumque dignissimos accusamus doloremque iusto velit eligendi magnam tempore, ullam, quos suscipit, facere ex delectus. Sapiente dicta velit obcaecati consectetur.'
        }
    ]

    return (
    <div className={cls.MessageList}>
            {messages.map(message => (
                <MessageCard message={message} />
            ))}
    </div>
  );
}
