import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
  isLoggedIn: boolean;
  user: any
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    doLogIn: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    doLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    authenticated: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { doLogIn, doLogout, authenticated } = authSlice.actions;

export const authState = (state: RootState) => state.auth;

export default authSlice.reducer;
