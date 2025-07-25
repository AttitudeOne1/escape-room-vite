import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, BookingInfo, Quest, QuestList, UserData } from '../types/types';
import { APIRoute } from '../const/const';
import { State } from '../types/state';
import { getToken, saveToken, dropToken } from '../services/token';

export const fetchQuestsAction = createAsyncThunk<QuestList, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<QuestList>(APIRoute.Quest);
    return data;
  },
);

export const fetchQuestInformation = createAsyncThunk<Quest, string, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestInformation',
  async (id, { extra: api }) => {
    const { data } = await api.get<Quest>(`${APIRoute.Quest}/${id}`);
    return data;
  }
);

export const fetchBookingInformation = createAsyncThunk<BookingInfo, string, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBookingInformation',
  async (id, { extra: api }) => {
    const { data } = await api.get<BookingInfo>(`${APIRoute.Quest}/${id}${APIRoute.Booking}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<{ token: string; data: UserData }, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const token = getToken();
    const { data } = await api.get<UserData>(APIRoute.Login);
    return { token, data };
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
