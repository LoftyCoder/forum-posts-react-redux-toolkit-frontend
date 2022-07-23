import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Zheng Ye' },
    { id: '1', name: 'Colby Taperts'},
    { id: '2', name: 'Luke Davis'}
]

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;