import { combineReducers } from '@reduxjs/toolkit';
import { questsDataSlice } from './quests-data/quests-data-slice';
import { NameSpace } from '../const/const';
import { userDataSlice } from './user-data/user-data-slice';
import { bookingDataSlice } from './booking-data/booking-data-slice';

export const rootReducer = combineReducers({
  [NameSpace.Quest]: questsDataSlice.reducer,
  [NameSpace.User]: userDataSlice.reducer,
  [NameSpace.Booking]: bookingDataSlice.reducer,
});
