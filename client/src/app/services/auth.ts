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
        getAllUsers: builder.mutation<ResponseLoginData, void>({
            query: () => ({
                url: 'users/',
                method: "GET",
            })
        }),
        editUserById: builder.mutation<ResponseLoginData, User>({
            query: (user) => ({
                url: `users/edit/${user.id}`,
                method: "PUT",
                body: user
            })
        })
    }),
    overrideExisting: false
})

export const {useRegisterMutation, useLoginMutation, useGetAllUsersMutation, useCurrentQuery, useEditUserByIdMutation} = authApi;

export const {endpoints: {login, register, getAllUsers, current, editUserById}} = authApi;