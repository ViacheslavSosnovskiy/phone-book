import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'        

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64fb46c0cb9c00518f7addc5.mockapi.io'}),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: '/contacts',
            providesTags: ['Contacts'],
        }),
        createContact: builder.mutation({
            query: ({name, number}) => ({
                url: '/contacts',
                method: 'POST',
                body: {name, number},
            }),
            invalidatesTags: ['Contacts'],
        }),
        removeContact: builder.mutation({
            query: (contactId) => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    })
})

export const { useGetContactsQuery, useCreateContactMutation, useRemoveContactMutation } = contactsApi