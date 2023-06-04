import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';

export const getUserId = (state: StateSchema) => state?.chat?.idInstance;
export const getUserToken = (state: StateSchema) => state?.chat?.apiTokenInstance;
export const getUserIsLoading = (state: StateSchema) => state?.chat?.isLoading || false;
export const getChats = (state: StateSchema) => state.chat.chats || [];
export const getCurrentChatPhone = (state: StateSchema) => state.chat.currentChatPhone || null;
export const getIsAuth = (state: StateSchema) => state.chat.isAuth || false;
export const getMessages = (state: StateSchema) => state.chat.messages || [];
