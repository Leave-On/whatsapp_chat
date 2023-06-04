import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { classes } from '@/shared/lib/classes/classes';
import { useAppDispatch } from '@/shared/lib/hooks/typedReduxHooks';
import { IContact } from '@/entities/Contact';
import { getUserId, getUserIsLoading, getUserToken, getIsAuth } from '../../model/selectors';
import { chatActions } from '../../model/slice/chatSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

export const LoginForm = ({ onSuccess, className }: LoginFormProps) => {
	const isAuth = useSelector(getIsAuth);

	const userId = useSelector(getUserId);
	const userToken = useSelector(getUserToken);
	const [contact, setContact] = useState<IContact>({
		name: '',
		phoneNumber: '',
	});

	const isLoading = useSelector(getUserIsLoading);

	const dispatch = useAppDispatch();

	const onChangeUserId = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(chatActions.setId(e.target.value));
		},
		[dispatch],
	);

	const onChangeUserToken = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(chatActions.setApiToken(e.target.value));
		},
		[dispatch],
	);

	const onSaveCredentials = () => {
		if (!isAuth) {
			localStorage.setItem('userId', userId);
			localStorage.setItem('userToken', userToken);
			dispatch(chatActions.setIsAuth(true));
		}
		dispatch(chatActions.addChat(contact));
		dispatch(chatActions.setCurrentChat(contact.phoneNumber));

		onSuccess();
	};

	const handleContactNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContact({ ...contact, name: e.target.value });
	};
	const handleContactPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContact({ ...contact, phoneNumber: e.target.value });
	};

	useEffect(() => {
		const isUserAuthed =
			Boolean(localStorage.getItem('userToken')) && Boolean(localStorage.getItem('userId'));
		dispatch(chatActions.setIsAuth(isUserAuthed));
		dispatch(chatActions.setApiToken(localStorage.getItem('userToken') as string));
		dispatch(chatActions.setId(localStorage.getItem('userId') as string));
	}, [dispatch]);

	return (
		<div className={classes(cls.LoginForm, {}, [className])}>
			{isLoading && <p>Wait a sec</p>}
			{!isAuth && (
				<>
					<div className={cls.input}>
						<label>Id</label>
						<input type="text" onChange={onChangeUserId} value={userId} />
					</div>
					<div className={cls.input}>
						<label>Token</label>
						<input type="password" onChange={onChangeUserToken} value={userToken} />
					</div>
				</>
			)}
			<div className={cls.input}>
				<label>Contact name</label>
				<input type="text" onChange={handleContactNameChange} value={contact.name} />
			</div>
			<div className={cls.input}>
				<label>Contact phone</label>
				<input
					type="number"
					onChange={handleContactPhoneChange}
					value={contact.phoneNumber}
				/>
			</div>
			<button onClick={onSaveCredentials}>Start chat</button>
		</div>
	);
};
