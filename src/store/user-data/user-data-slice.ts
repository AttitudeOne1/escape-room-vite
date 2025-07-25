import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/types';
import { AuthorizationStatus, NameSpace } from '../../const/const';

export type UserType = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState: UserType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    email: '',
    password: '',
    token: '',
  }
};

export const userDataSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        if (!action.payload.token) {
          state.authorizationStatus = AuthorizationStatus.NoAuth;
          return;
        }
        state.userData = action.payload.data;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
