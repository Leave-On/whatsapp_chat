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
	'chat/sendMessage',
	async (message, { rejectWithValue, getState, dispatch }) => {
		const state = getState() as StateSchema;
		const userId = state.chat.idInstance;
		const userToken = state.chat.apiTokenInstance;
		const chatId = state.chat.currentChatPhone?.concat('@c.us');

		try {
			if (userId && userToken && chatId) {
				const messageToSend: IMessage = {
					chatId,
					message,
				};
				await $greenApi.post(
					`waInstance${userId}/sendMessage/${userToken}`,
					messageToSend,
				);
				dispatch(
					chatActions.addMessage({
						...messageToSend,
						direction: 'outgoing',
					}),
				);

				// return response.data
			}
		} catch (error) {
			return rejectWithValue("Can't send message, sry:(");
		}
	},
);

const deleteNotification = createAsyncThunk<void, deleteNotificationProps>(
	'chat/deleteNotification',
	async ({ receiptId, userId, userToken }, { rejectWithValue }) => {
		try {
			const response = await $greenApi.delete(
				`waInstance${userId}/deleteNotification/${userToken}/${receiptId}`,
			);

			return response.data;
		} catch (error) {
			console.log();
			return rejectWithValue('error while deleting notification');
		}
	},
);

export const receiveMessage = createAsyncThunk(
	'chat/receiveMessage',
	async (_, { rejectWithValue, getState, dispatch }) => {
		const state = getState() as StateSchema;
		const userId = state.chat.idInstance;
		const userToken = state.chat.apiTokenInstance;
		let receiptId;

		try {
			const response = await $greenApi.get(
				`waInstance${userId}/receiveNotification/${userToken}`,
			);
			if (response.data) {
				if (
					response.data.body.typeWebhook !== 'incomingMessageReceived'
				) {
					console.log('waiting for incoming messages');

					receiptId = response.data.receiptId;
					dispatch(
						deleteNotification({ receiptId, userId, userToken }),
					);
				}

				if (
					response.data.body.typeWebhook === 'incomingMessageReceived'
				) {
					console.log('incoming webhook', response.data);
					const message =
						response.data.body.messageData.textMessageData
							.textMessage;
					const chatId = response.data.body.senderData.chatId;
					dispatch(
						chatActions.addMessage({
							chatId,
							message,
							direction: 'incoming',
						}),
					);

					receiptId = response.data.receiptId;
					dispatch(
						deleteNotification({ receiptId, userId, userToken }),
					);
					return response.data;
				}
			}
		} catch (error) {
			console.log(error);
			return rejectWithValue('error while receiving notification');
		}
	},
);
