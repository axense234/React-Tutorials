import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = usersAdapter.getInitialState();

export const extendedApiSliceUsers = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const selectUsersResult =
  extendedApiSliceUsers.endpoints.getUsers.select();

// Creating a normalized state

const selectUsersData = createSelector(selectUsersResult, (usersResults) => {
  console.log(usersResults.data);
  return usersResults.data;
});

export const { useGetUsersQuery, useGetUserByIdQuery } = extendedApiSliceUsers;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState
);
