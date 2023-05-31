import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { $api } from "../../../../app/api/api";
import { Message } from "../../../../app/types";
import { getUserId, getUserToken } from "../selectors";

export interface sendMessageProps {
  message: Message;
}

export const sendMessage = createAsyncThunk<Message, sendMessageProps>(
     'login',
      async (message, thunkApi) => {
      const userId = useSelector(getUserId)
      const userToken = useSelector(getUserToken)
      console.log('thunk');

      console.log(userId, userToken, message);
        try {
          const response = await $api.post(`${userId}/send/${userToken}`, message)
          console.log(userId, userToken, message);
          if(!response.data) {
            throw new Error('auth failed')
          }
          console.log(response.data);
          console.log(userId, userToken, message);
          return response.data
        } catch(e) {
        console.log(userId, userToken, message);
          console.log(e);

        }
     }
    )