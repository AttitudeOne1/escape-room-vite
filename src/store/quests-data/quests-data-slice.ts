import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Quest, QuestList } from '../../types/types';
import { NameSpace } from '../../const/const';
import { fetchQuestInformation, fetchQuestsAction } from '../api-actions';
import { DEFAULT_LEVEL, QuestLevel } from '../../const/quest-levels';
import { DEFAULT_TYPE, QuestType } from '../../const/quest-types';

type QuestsData = {
    quests: QuestList;
    isLoading: boolean;
    hasError: boolean;
    level: QuestLevel;
    type: QuestType;
    questInformation: Quest | null;
    isQuestInformationLoading: boolean;
};

const initialState: QuestsData = {
  quests: [],
  isLoading: false,
  hasError: false,
  level: DEFAULT_LEVEL,
  type: DEFAULT_TYPE,
  questInformation: null,
  isQuestInformationLoading: false,
};

export const questsDataSlice = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {
    changeLevel(state, action: PayloadAction<QuestLevel>) {
      state.level = action.payload;
    },
    changeType(state, action: PayloadAction<QuestType>) {
      state.type = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });

    builder
      .addCase(fetchQuestInformation.pending, (state) => {
        state.isQuestInformationLoading = true;
        state.hasError = false;
      })
      .addCase(fetchQuestInformation.fulfilled, (state, action) => {
        state.questInformation = action.payload;
        state.isQuestInformationLoading = false;
      })
      .addCase(fetchQuestInformation.rejected, (state) => {
        state.isQuestInformationLoading = false;
        state.hasError = true;
      });

  }
});

export const { changeLevel, changeType } = questsDataSlice.actions;
