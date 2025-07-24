import { combineReducers } from '@reduxjs/toolkit';
// import { userSlice } from './user-slice/user-slice';
import { questsDataSlice } from './quests-data/quests-data-slice';
import { NameSpace } from '../const/const';

export const rootReducer = combineReducers({
  [NameSpace.Data]: questsDataSlice.reducer,
  //   [NameSpace.User]: userSlice.reducer,
  //   [NameSpace.Review]: userReviewSlice.reducer,
});
