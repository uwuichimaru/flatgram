import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../app/services/auth";


export const listenerMiddlewareLogin = createListenerMiddleware();

listenerMiddlewareLogin.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();

        if(action.payload.token) {
            localStorage.setItem("token", action.payload.token);
        }
    }
})


export const listenerMiddlewareRegister = createListenerMiddleware()

listenerMiddlewareRegister.startListening({
    matcher: authApi.endpoints.register.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();

        if(action.payload.token) {
            localStorage.setItem("token", action.payload.token);
        }
    }
})