import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quest, QuestList } from '../types/types';
import { APIRoute } from '../const/const';
import { State } from '../types/state';

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
    // console.log(`id: ${id}`);
    // console.log(`data: ${data}`);

    return data;
  }
);
