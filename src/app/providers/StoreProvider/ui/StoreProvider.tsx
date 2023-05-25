import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "../config/StateSchema"
import { ReactNode } from 'react'
import { Provider } from "react-redux";
import { CreateReduxStore } from "../config/store";


interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    reducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        initialState,
        reducers,
        children
    } = props

    const store = CreateReduxStore(
        initialState as StateSchema,
        reducers as ReducersMapObject<StateSchema>
    )

    return <Provider store={store} >{children}</Provider>

}