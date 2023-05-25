import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export interface loginByGreenApiGredentialsProps {
    idInstance: string;
    apiTokenInstance: string;
}

export const loginByGreenApiGredentials = createAsyncThunk<
    User,
    loginByGreenApiGredentialsProps,
    ThunkConfig<string>>(
     'login',
     async (authData, thunkApi) => {
        const { apiTokenInstance, idInstance } = authData
        const { extra, dispatch, rejectWithValue } = thunkApi

        try {
          const response = await extra.api.post<User>(`${idInstance}/login/${apiTokenInstance}`)

          if(!response.data) {
            throw new Error('auth failed')
          }

        } catch(e) {

        }
     }
    )