import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { classes } from '../../../../../app/lib/classes/classes';
import { useAppDispatch } from '../../../../../app/lib/hooks/typedReduxHooks';
import { Contact } from '../../../../../app/types';
import { getUserId, getUserIsLoading, getUserToken } from '../../../model/selectors';
import { sendMessage } from '../../../model/services/useGreenApi';
import { loginActions } from '../../../model/slice/loginSlice';
import { getIsAuth } from '../../../model/selectors';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

export const LoginForm = ({ onSuccess, className }: LoginFormProps) => {
	const [messageValue, setMessageValue] = useState('');
	const isAuth = useSelector(getIsAuth);

	const userId = useSelector(getUserId);
	const userToken = useSelector(getUserToken);
	const [contact, setContact] = useState<Contact>({ name: '', phoneNumber: '' });

	const isLoading = useSelector(getUserIsLoading);

	const dispatch = useAppDispatch();

	const onChangeUserId = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(loginActions.setId(e.target.value));
		},
		[dispatch],
	);

	const onChangeUserToken = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(loginActions.setApiToken(e.target.value));
		},
		[dispatch],
	);

	const onSaveCredentials = () => {
		if (!isAuth) {
			localStorage.setItem('userId', userId)
			localStorage.setItem('userToken', userToken)
		}
		dispatch(loginActions.addChat(contact));
		dispatch(loginActions.setIsAuth(true));
		dispatch(loginActions.setCurrentChat(contact.phoneNumber));

		onSuccess();
	};

	const handleContactNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContact({ ...contact, name: e.target.value });
	};
	const handleContactPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContact({ ...contact, phoneNumber: e.target.value });
	};

	useEffect(() => {
			dispatch(loginActions.setApiToken(localStorage.getItem('userToken') as string))
			dispatch(loginActions.setId(localStorage.getItem('userId') as string))
	}, [])

	return (
		<div className={classes(cls.LoginForm, {}, [className])}>
			{isLoading && <p>Wait a sec</p>}
			{!isAuth && (
				<>
					<div className={cls.input}>
						<label>Id</label>
						<input
							type="text"
							onChange={onChangeUserId}
							value={userId}
						/>
					</div>
					<div className={cls.input}>
						<label>Token</label>
						<input
							type="password"
							onChange={onChangeUserToken}
							value={userToken}
						/>
					</div>
				</>
			)}
			<div className={cls.input}>
				<label>Contact name</label>
				<input
					type="text"
					onChange={handleContactNameChange}
					value={contact.name}
				/>
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
