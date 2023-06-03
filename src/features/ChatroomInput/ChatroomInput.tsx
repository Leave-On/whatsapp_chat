import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../shared/lib/hooks/typedReduxHooks';
import { receiveMessage, sendMessage } from '../Chat/model/services/useGreenApi';
import cls from './ChatroomInput.module.scss';

export const ChatroomInput: React.FC = () => {
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

	const getMessage = () => {
		dispatch(receiveMessage())
	}

	// useEffect(() => {
	// 	const messageRetriever = setInterval(() => {
	// 		dispatch(receiveMessage())
	// 	}, 5000)

	// 	return () => {
	// 		clearInterval(messageRetriever)
	// 	}
	// }, [dispatch])

	return (
		<div className={cls.ChatroomInput}>
			<input
				className={cls.input}
				placeholder="Введите сообщение"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button onClick={getMessage} >Get</button>
		</div>
	);
};