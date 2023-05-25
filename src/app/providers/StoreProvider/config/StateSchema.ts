import { AxiosInstance } from "axios";
import { LoginSchema } from "../../../../features/AuthByCredentials/model/types/loginSchema";

export interface StateSchema {
    loginForm?: LoginSchema;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}