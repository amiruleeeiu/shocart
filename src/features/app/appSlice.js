
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.hiring.masterkey.tech/api/v1/'
    }),
    tagTypes:[],
    endpoints:(builder)=>({})
})