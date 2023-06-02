import { createAsyncThunk } from '@reduxjs/toolkit';
import { $greenApi } from '../../../../app/api/greenApi';
import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';
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
			dispatch(loginActions.addMessage({
				...messageToSend,
				type: 'outgoing'
			}))
		}
	},
);

export const receiveMessage = createAsyncThunk(
	'login/receiveMessage',
	async (_, {rejectWithValue, getState, dispatch}) => {
		const state = getState() as StateSchema
		const userId = state.loginForm.idInstance
		const userToken = state.loginForm.apiTokenInstance
		let receiptId
		try {
			const response = await $greenApi.get(`waInstance${userId}/receiveNotification/${userToken}`)

			if (response.data) {
				if (response.data.body.typeWebhook === 'incomingMessageReceived') {
					const message = response.data.body.messageData.textMessageData.textMessage
					const chatId = response.data.body.senderData.chatId
					dispatch(loginActions.addMessage({
						chatId,
						message,
						type: 'incoming'
					}))
				}

				receiptId = response.data.receiptId
				dispatch(deleteNotification({receiptId, userId, userToken}))
			}
			console.log(response.data);

			return response.data
		} catch (error) {
			console.log('error receiving');

			return rejectWithValue(error)
		}
	}
)

interface deleteNotificationProps {
	receiptId: number;
	userId: string;
	userToken: string;
}

const deleteNotification = createAsyncThunk<void, deleteNotificationProps>(
	'login/deleteNotification',
	async ({receiptId, userId, userToken}, {rejectWithValue}) => {

		try {
			const response = await $greenApi.delete(`waInstance${userId}/deleteNotification/${userToken}/${receiptId}`)

			return response.data
		} catch (error) {
			console.log('error deleting');

			return rejectWithValue(error)
		}

	}
)
