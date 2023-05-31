import { AxiosInstance } from "axios";
import { ChatSchema } from "../../../../features/AuthByCredentials/model/types/ChatSchema";

export interface StateSchema {
    loginForm: ChatSchema;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}