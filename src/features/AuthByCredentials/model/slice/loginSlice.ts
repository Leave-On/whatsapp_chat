import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByGreenApiGredentials } from '../services/loginByGreenApiGredentials'


const initialState: LoginSchema = {
    isLoading: false,
    apiTokenInstance: '',
    idInstance: ''
}

export const counterSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setApiToken: (state, {payload}: PayloadAction<string>) => {
      state.apiTokenInstance = payload
    },
    setId: (state, {payload}: PayloadAction<string>) => {
      state.idInstance = payload
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginByGreenApiGredentials.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(loginByGreenApiGredentials.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        .addCase(loginByGreenApiGredentials.rejected, (state, action) => {
            state.isLoading = false;
        });
},

})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = counterSlice

export default counterSlice.reducer