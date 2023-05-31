import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChatSchema } from '../types/ChatSchema'
import { sendMessage } from '../services/useGreenApi'
import { Contact } from '../../../../app/types'


const initialState: ChatSchema = {
    isLoading: false,
    apiTokenInstance: '',
    idInstance: '',
    currentChatPhone: undefined,
    chats: []
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setApiToken: (state, {payload}: PayloadAction<string>) => {
      state.apiTokenInstance = payload

    },
    setId: (state, {payload}: PayloadAction<string>) => {
      state.idInstance = payload
    },
    setCurrentChat: (state, {payload}: PayloadAction<string>) => {
      state.currentChatPhone = payload
    },
    addChat: (state, {payload}: PayloadAction<Contact>) => {
      state.chats.push(payload)
    },
    setIsAuth: (state, {payload}: PayloadAction<boolean>) => {
      state.isAuth = payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(sendMessage.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(sendMessage.fulfilled, (state, action) => {
          state.isLoading = false;
        })
        .addCase(sendMessage.rejected, (state, action) => {
          state.isLoading = false;
        });
},

})


export const { actions: loginActions, reducer: loginReducer  } = loginSlice
