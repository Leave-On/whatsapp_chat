import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/lib/hooks/typedReduxHooks";
import { getCurrentChatPhone } from "../../../../features/AuthByCredentials/model/selectors";
import { sendMessage } from "../../../../features/AuthByCredentials/model/services/useGreenApi";
import cls from "./ChatroomInput.module.scss";

interface ChatroomInputProps {}

export const ChatroomInput = ({}: ChatroomInputProps) => {

    const [message, setMessage] = useState('')
    const currentContact = useSelector(getCurrentChatPhone)
    const dispatch = useAppDispatch()

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && message.length) {
            console.log('go dispatch');
            dispatch(sendMessage({
                message: {
                    chatId: `${currentContact}@c.us`,
                    message
                }
            }))
            setMessage('')
        }
    }

    return (
        <div className={cls.ChatroomInput}>
            <input
                className={cls.input}
                placeholder="Введите сообщение"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};
