export interface IMessage {
	chatId: string;
	message: string;
	direction?: 'incoming' | 'outgoing';
}
