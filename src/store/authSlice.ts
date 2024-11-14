import { login } from '@/actions/login';
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isLoading: boolean;
  isAuthentiacted: boolean;
  error: string;
}

const initialState: AuthState = {
  isLoading: false,
  isAuthentiacted: false,
  error: ""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthentiacted = action.payload;

      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Failed";
      });
  },
})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer