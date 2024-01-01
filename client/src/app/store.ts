import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit'
import auth from '../features/auth/authSlice'
import { api } from './services/api'
import { listenerMiddlewareLogin, listenerMiddlewareRegister } from '../middleware'
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
        .prepend(listenerMiddlewareLogin.middleware)
        .prepend(listenerMiddlewareRegister.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
