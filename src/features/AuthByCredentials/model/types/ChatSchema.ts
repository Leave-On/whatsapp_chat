import { Contact } from '../../../../app/types';

export interface ChatSchema {
	idInstance: string;
	apiTokenInstance: string;
	isLoading?: boolean;
	isAuth?: boolean;
	currentChatPhone?: string;
	chats: Contact[];
}

export interface User {}
