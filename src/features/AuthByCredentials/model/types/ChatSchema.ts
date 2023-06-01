import { Contact, Message } from '../../../../app/types';

export interface ChatSchema {
	idInstance: string;
	apiTokenInstance: string;
	isLoading?: boolean;
	isAuth?: boolean;
	currentChatPhone?: string;
	chats: Contact[];
	messages: Message[];
}

export interface User {}
