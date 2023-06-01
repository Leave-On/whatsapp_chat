import { useState } from 'react';
import { useAppDispatch } from '../../../../app/lib/hooks/typedReduxHooks';
import { sendMessage } from '../../../../features/AuthByCredentials/model/services/useGreenApi';
import cls from './ChatroomInput.module.scss';

interface ChatroomInputProps {}

export const ChatroomInput = ({}: ChatroomInputProps) => {
	const [message, setMessage] = useState('');
	const dispatch = useAppDispatch();

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && message.length) {
			console.log('go dispatch');
				dispatch(
					sendMessage(message),
				);
			setMessage('');
		}
	};

	return (
		<div className={cls.ChatroomInput}>
			<input
				className={cls.input}
				placeholder="Введите сообщение"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};
