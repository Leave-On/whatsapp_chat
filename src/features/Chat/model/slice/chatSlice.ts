import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from '@/entities/Message';
import { IContact } from '@/entities/Contact';
// import { receiveMessage, sendMessage } from '../services/useGreenApi';
import { ChatSchema } from '../types/ChatSchema';

const initialState: ChatSchema = {
	isLoading: false,
	apiTokenInstance: '',
	idInstance: '',
	currentChatPhone: undefined,
	chats: [],
	messages: [],
};

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setApiToken: (state, { payload }: PayloadAction<string>) => {
			state.apiTokenInstance = payload;
		},
		setId: (state, { payload }: PayloadAction<string>) => {
			state.idInstance = payload;
		},
		setCurrentChat: (state, { payload }: PayloadAction<string>) => {
			state.currentChatPhone = payload;
		},
		addChat: (state, { payload }: PayloadAction<IContact>) => {
			state.chats.push(payload);
		},
		setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
			state.isAuth = payload;
		},
		addMessage: (state, { payload }: PayloadAction<IMessage>) => {
			state.messages.push(payload);
		},
	},
	// extraReducers: (builder) => {
	//     builder
	//         .addCase(sendMessage.pending, (state, action) => {
	//             state.isLoading = true;
	//         })
	//         .addCase(sendMessage.fulfilled, (state, action) => {
	//             state.isLoading = false;
	//         })
	//         .addCase(sendMessage.rejected, (state, action) => {
	//             state.isLoading = false;
	//         })
	//         .addCase(receiveMessage.fulfilled, (state, action) => {
	//             state.isLoading = false
	//         });
	// },
});

export const { actions: chatActions, reducer: chatReducer } = chatSlice;
