// src/redux/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./thunk";

interface UserState {
    firstName: string | null;
    lastName: string | null;
    isLoading: boolean;
    isLoggedIn: boolean;
    error: string | null;
}

const initialState: UserState = {
    firstName: null,
    lastName: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    fetchUser: (state, action: PayloadAction<string>) => {
        state.firstName = action.payload;
    },
    },
    extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.firstName = payload.name; // assuming the payload contains a `name` property
        state.isLoading = false;
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.isLoading = false;
        });
    },
});

export const { fetchUser } = userSlice.actions;

export default userSlice.reducer;
