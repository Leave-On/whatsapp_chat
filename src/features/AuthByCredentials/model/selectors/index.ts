import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';

export const getUserId = (state: StateSchema) => state?.loginForm?.idInstance;
export const getUserToken = (state: StateSchema) => state?.loginForm?.apiTokenInstance;
export const getUserIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
export const getChats = (state: StateSchema) => state.loginForm.chats || [];
export const getCurrentChatPhone = (state: StateSchema) => state.loginForm.currentChatPhone || null;
export const getIsAuth = (state: StateSchema) => state.loginForm.isAuth || false;
export const getMessages = (state: StateSchema) => state.loginForm.messages || []
