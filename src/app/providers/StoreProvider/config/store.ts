import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { chatReducer } from '@/features/Chat';

export const store = configureStore<StateSchema>({
	reducer: {
		chat: chatReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
