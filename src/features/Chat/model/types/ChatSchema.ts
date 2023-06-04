import { IMessage } from '@/entities/Message';
import { IContact } from '@/entities/Contact';

export interface ChatSchema {
	idInstance: string;
	apiTokenInstance: string;
	isLoading?: boolean;
	isAuth?: boolean;
	currentChatPhone?: string;
	chats: IContact[];
	messages: IMessage[];
}
