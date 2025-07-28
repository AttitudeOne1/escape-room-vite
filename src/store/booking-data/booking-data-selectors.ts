import { NameSpace } from '../../const/const';
import { State } from '../../types/state';
import {BookingInfo, BookingInfoList, MyQuestList, QuestBooking } from '../../types/types';

export const getBookingInformation = (state: Pick<State, NameSpace.Booking>): BookingInfoList => state[NameSpace.Booking].bookingInformation;
export const getBookingLoadingStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].isBookingInformationLoading;
export const getBookingErrorStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].hasBookingError;
export const getSelectedQuestPlace = (state: Pick<State, NameSpace.Booking>): BookingInfo => state[NameSpace.Booking].selectedQuestPlace;
export const getBookingFormLoadingStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].isBookingFormLoading;
export const getMyQuests = (state: Pick<State, NameSpace.Booking>): MyQuestList => state[NameSpace.Booking].myQuests;
export const getMyQuestsLoadingStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].isMyQuestsLoading;
export const getMyQuestsErrorStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].hasMyQuestsError;
export const getQuestFormData = (state: Pick<State, NameSpace.Booking>): QuestBooking => state[NameSpace.Booking].questFormData;
