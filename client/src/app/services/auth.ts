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
        getUserById: builder.query<ResponseLoginData, UserData>({
            query: (id) => ({
                url: 'users/getUserById/',
                method: "GET",
                params: id
            })
        })
    }),
    overrideExisting: false
})

export const {useRegisterMutation, useLoginMutation, useGetUserByIdQuery} = authApi;

export const {endpoints: {login, register, getUserById}} = authApi;