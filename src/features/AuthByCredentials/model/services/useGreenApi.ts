import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { $greenApi } from '../../../../app/api/greenApi';
import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';
import { Message } from '../../../../app/types';
import { getCurrentChatPhone, getUserId, getUserToken } from '../selectors';
import { loginActions } from '../slice/loginSlice';

export type sendMessageProps = string;

export const sendMessage = createAsyncThunk<void, sendMessageProps>(
	'login/sendMessage',
	async (message, {rejectWithValue, getState, dispatch}) => {
		const state = getState() as StateSchema
		const userId = state.loginForm.idInstance
		const userToken = state.loginForm.apiTokenInstance
		const chatId = state.loginForm.currentChatPhone?.concat('@c.us')

		console.log(userId, userToken);

		if (userId && userToken && chatId) {
			const messageToSend = {
				chatId,
				message
			}
			await $greenApi.post(`waInstance${userId}/sendMessage/${userToken}`, messageToSend);
			dispatch(loginActions.addMessage(messageToSend))
		}
	},
);
