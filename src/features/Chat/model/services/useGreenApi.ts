import { createAsyncThunk } from '@reduxjs/toolkit';
import { $greenApi } from '../../../../shared/api/greenApi';
import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';
import { chatActions } from '../slice/chatSlice';
import { IMessage } from '@/entities/Message';



type sendMessageProps = string;

interface deleteNotificationProps {
	receiptId: number;
	userId: string;
	userToken: string;
}

export const sendMessage = createAsyncThunk<void, sendMessageProps>(
	'login/sendMessage',
	async (message, {rejectWithValue, getState, dispatch}) => {
		const state = getState() as StateSchema
		const userId = state.chat.idInstance
		const userToken = state.chat.apiTokenInstance
		const chatId = state.chat.currentChatPhone?.concat('@c.us')
		console.log(userId, userToken);

		try {
			if (userId && userToken && chatId) {
				const messageToSend: IMessage = {
					chatId,
					message
				}
				const response = await $greenApi.post(`waInstance${userId}/sendMessage/${userToken}`, messageToSend);
				dispatch(chatActions.addMessage({...messageToSend, direction: 'outgoing'}))

				return response.data
			}
		} catch (error) {
			return rejectWithValue('Can\'t send message, sry:(')
		}
	},
);

export const receiveMessage = createAsyncThunk(
	'login/receiveMessage',
	async (_, {rejectWithValue, getState, dispatch}) => {
		const state = getState() as StateSchema
		const userId = state.chat.idInstance
		const userToken = state.chat.apiTokenInstance
		let receiptId
		console.log('receive!')
		try {
			const response = await $greenApi.get(`waInstance${userId}/receiveNotification/${userToken}`)

			if (response.data) {
					if (response.data.body.typeWebhook === 'incomingMessageReceived') {
						const message = response.data.body.messageData.textMessageData.textMessage
						const chatId = response.data.body.senderData.chatId
						console.log('incoming webhook', response.data);
						dispatch(chatActions.addMessage({
							chatId,
							message,
							direction: 'incoming'
						}))
						receiptId = response.data.receiptId
						dispatch(deleteNotification({receiptId, userId, userToken}))
					}

				console.log(response.data);

				return response.data
			}

		} catch (error) {
			console.log();
			return rejectWithValue('error while receiving notification')
		}
	}
)


const deleteNotification = createAsyncThunk<void, deleteNotificationProps>(
	'login/deleteNotification',
	async ({receiptId, userId, userToken}, {rejectWithValue}) => {

		try {
			const response = await $greenApi.delete(`waInstance${userId}/deleteNotification/${userToken}/${receiptId}`)

			return response.data
		} catch (error) {
			console.log();
			return rejectWithValue('error while deleting notification')
		}

	}
)
