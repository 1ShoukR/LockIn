// src/redux/thunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginCredentials {
  email: string;
  password: string;
}

// Add User type to createAsyncThunk
interface User {
  name: string;
  age: number;
}

export const loginUser = createAsyncThunk<User, LoginCredentials, { rejectValue: string }>('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await fetch('http://your-api-endpoint/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const userData = await response.json();

        if (response.status !== 200) {
            return rejectWithValue(userData.message);
        }

        return userData;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message || 'Unable to login');
        }
        return rejectWithValue('Unable to login');
    }
});
