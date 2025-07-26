import { NameSpace } from '../../const/const';
import { State } from '../../types/state';
import {BookingInfo, BookingInfoList, MyQuestList } from '../../types/types';

export const getBookingInformation = (state: Pick<State, NameSpace.Booking>): BookingInfoList => state[NameSpace.Booking].bookingInformation;
export const getBookingLoadingStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].isBookingInformationLoading;
export const getBookingErrorStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].hasBookingError;
export const getSelectedQuestPlace = (state: Pick<State, NameSpace.Booking>): BookingInfo => state[NameSpace.Booking].selectedQuestPlace;
export const getBookingFormLoadingStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].isBookingFormLoading;
export const getMyQuests = (state: Pick<State, NameSpace.Booking>): MyQuestList => state[NameSpace.Booking].myQuests;
