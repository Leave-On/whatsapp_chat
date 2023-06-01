import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTest = createAsyncThunk(
    'login',
    async () => {
        console.log('thunk test');

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))

        return response
    }
)