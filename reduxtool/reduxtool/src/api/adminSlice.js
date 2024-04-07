import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/' }),
    endpoints: (builder) => ({
      geAccounts: builder.query({
        query: () => `accounts`,
        transformResponse: (response) => response.sort((a, b) => b.id - a.id),
        providesTags: ['accounts']
      }),
      addAccount: builder.mutation({
        query: (amount, id) => ({
            url: 'accounts',
            method: 'POST',
            body: {amount, id}
        }),
        invalidatesTags: ['accounts']
      }),
      deleteAccount: builder.mutation({
        query: (id) => ({
            url: `accounts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['accounts']
      }),
      updateAccount: builder.mutation({
        query: ({id,amount}) => ({
            url: `accounts/${id}`,
            method: 'PATCH',
            body: {amount}
        }),
        invalidatesTags: ['accounts']
      })
    })
  })
  
  // Export hooks for usage in function components, which are
  // auto-generated based on the defined endpoints
  export const { useGeAccountsQuery, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation } = adminApi