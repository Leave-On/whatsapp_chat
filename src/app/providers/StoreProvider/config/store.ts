import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { useDispatch } from 'react-redux';
import { loginReducer } from '../../../../features/AuthByCredentials/model/slice/loginSlice';

export const store = configureStore<StateSchema>({
	reducer: {
		loginForm: loginReducer,
	},
});

export const useAppDispatch = useDispatch<typeof store.dispatch>;
export type RootState = ReturnType<typeof store.getState>;
