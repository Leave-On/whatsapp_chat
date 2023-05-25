import cls from './ChatroomInput.module.scss'

interface ChatroomInputProps {
}

export const ChatroomInput = ({}: ChatroomInputProps) => {

    return (
    <div className={cls.ChatroomInput}>
        <input className={cls.input} placeholder='Введите сообщение'/>
    </div>
  );
}