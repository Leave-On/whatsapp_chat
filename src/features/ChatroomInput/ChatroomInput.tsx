import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../shared/lib/hooks/typedReduxHooks';
import { getCurrentChatPhone } from '../Chat/model/selectors';
import {
	receiveMessage,
	sendMessage,
} from '../Chat/model/services/useGreenApi';
import cls from './ChatroomInput.module.scss';

export const ChatroomInput: React.FC = () => {
	const [message, setMessage] = useState('');
	const dispatch = useAppDispatch();
	const currentContact = useSelector(getCurrentChatPhone);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && message.length) {
			dispatch(sendMessage(message));
			setMessage('');
		}
	};


	useEffect(() => {
		if (currentContact) {
			const intId = setInterval(() => {
				dispatch(receiveMessage());
			}, 10000)

			return () => {
				clearInterval(intId)
			}
		}
	}, [currentContact, dispatch])

	return (
		<div className={cls.ChatroomInput}>
			<input
				className={cls.input}
				placeholder="Введите сообщение"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={handleKeyDown}
				disabled={!currentContact}
			/>
		</div>
	);
};
