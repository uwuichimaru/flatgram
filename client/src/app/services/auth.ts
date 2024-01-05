import { api } from "./api";
import { User } from "@prisma/client";

export type UserData = Omit<User, "id">
export type ResponseLoginData = User & {token: string};

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: "/users/login",
                method: "POST",
                body: userData
            })
        }),
        register: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: "users/register",
                method: "POST",
                body: userData,
            })
        }),
        current: builder.query<ResponseLoginData, void>({
            query: () => ({
                url: "users/current",
                method: "GET",
            })
        }),
        getUserById: builder.query<ResponseLoginData, UserData>({
            query: (id) => ({
                url: 'users/getUserById/',
                method: "GET",
                body: id
            })
        }),
    }),
    overrideExisting: false
})

export const {useRegisterMutation, useLoginMutation, useGetUserByIdQuery, useCurrentQuery} = authApi;

export const {endpoints: {login, register, getUserById, current}} = authApi;