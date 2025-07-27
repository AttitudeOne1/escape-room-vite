import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, BookingInfoList, MyQuestList, PostData, Quest, QuestList, UserData } from '../types/types';
import { APIRoute } from '../const/const';
import { AppDispatch, State } from '../types/state';
import { getToken, saveToken, dropToken } from '../services/token';
import { setSelectedQuestPlace } from './booking-data/booking-data-slice';

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

export const fetchBookingInformation = createAsyncThunk<BookingInfoList, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBookingInformation',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<BookingInfoList>(`${APIRoute.Quest}/${id}${APIRoute.Booking}`);
    dispatch(setSelectedQuestPlace(data[0]));
    return data;
  },
);

export const fetchQuestInformation = createAsyncThunk<Quest, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestInformation',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Quest>(`${APIRoute.Quest}/${id}`);
    dispatch(fetchBookingInformation(id));
    return data;
  }
);

export const postQuestBooking = createAsyncThunk<void, PostData, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/postQuestBooking',
  async ({ postData, id }, { extra: api }) => {
    await api.post<PostData>(`${APIRoute.Quest}/${id}${APIRoute.Booking}`, postData);
  },
);

export const fetchMyQuestsInformation = createAsyncThunk<MyQuestList, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMyQuestsInformation',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<MyQuestList>(APIRoute.Reservation);
    return data;
  },
);

export const deleteMyQuest = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/deleteMyQuest',
  async (id, { dispatch, extra: api }) => {
    await api.delete(`${APIRoute.Reservation}/${id}`);
    dispatch(fetchMyQuestsInformation());
  });

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
