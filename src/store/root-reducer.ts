import { combineReducers } from '@reduxjs/toolkit';
import { questsDataSlice } from './quests-data/quests-data-slice';
import { NameSpace } from '../const/const';
import { userDataSlice } from './user-data/user-data-slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: questsDataSlice.reducer,
  [NameSpace.User]: userDataSlice.reducer,
  //   [NameSpace.Review]: userReviewSlice.reducer,
});
