import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api } from '../../../api/api'

export function CreateReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers
    }

const extraArg: ThunkExtraArg = {
    api: $api
}

const store = configureStore({
  reducer: rootReducers,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
        extraArgument: extraArg
    }
  })
})

return store
}

export type AppDispatch = ReturnType<typeof CreateReduxStore>['dispatch']
