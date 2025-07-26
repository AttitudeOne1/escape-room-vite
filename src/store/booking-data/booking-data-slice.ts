import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BookingInfo, BookingInfoList, MyQuestList, QuestBooking } from '../../types/types';
import { NameSpace } from '../../const/const';
import { fetchBookingInformation, fetchMyQuestsInformation, postQuestBooking } from '../api-actions';

type BookingData = {
    bookingInformation: BookingInfoList;
    isBookingInformationLoading: boolean;
    hasBookingError: boolean;
    selectedQuestPlace: BookingInfo;
    questBookingForm: QuestBooking;
    isBookingFormLoading: boolean;
    myQuests: MyQuestList;
    isMyQuestsLoading: boolean;
};

const initialState: BookingData = {
  bookingInformation: [],
  isBookingInformationLoading: false,
  hasBookingError: false,
  selectedQuestPlace: {
    id: '',
    location: {
      coords: [0, 1],
      address: ''
    },
    slots: {
      today: [{ time: 'string', isAvailable: false }],
      tomorrow: [{ time: 'string', isAvailable: false }],
    }
  },
  questBookingForm: {
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 0,
    placeId: '',
  },
  isBookingFormLoading: false,
  myQuests: [],
  isMyQuestsLoading: false,
};

export const bookingDataSlice = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {
    setSelectedQuestPlace: (state, action: PayloadAction<BookingInfo>) => {
      state.selectedQuestPlace = action.payload;
    },
  },
  extraReducers(builder) {

    builder
      .addCase(fetchBookingInformation.pending, (state) => {
        state.isBookingInformationLoading = true;
        state.hasBookingError = false;
      })
      .addCase(fetchBookingInformation.fulfilled, (state, action) => {
        state.bookingInformation = action.payload;
        state.isBookingInformationLoading = false;
      })
      .addCase(fetchBookingInformation.rejected, (state) => {
        state.isBookingInformationLoading = false;
        state.hasBookingError = true;
      });

    builder
      .addCase(postQuestBooking.pending, (state) => {
        state.isBookingFormLoading = true;
        state.hasBookingError = false;
      })
      .addCase(postQuestBooking.fulfilled, (state, action) => {
        state.questBookingForm = action.payload;
        state.isBookingFormLoading = false;
      })
      .addCase(postQuestBooking.rejected, (state) => {
        state.isBookingFormLoading = false;
        state.hasBookingError = true;
      });

    builder
      .addCase(fetchMyQuestsInformation.pending, (state) => {
        state.isMyQuestsLoading = true;
        state.hasBookingError = false;
      })
      .addCase(fetchMyQuestsInformation.fulfilled, (state, action) => {
        state.myQuests = action.payload;
        state.isMyQuestsLoading = false;
      })
      .addCase(fetchMyQuestsInformation.rejected, (state) => {
        state.isMyQuestsLoading = false;
        state.hasBookingError = true;
      });

  }
});

export const { setSelectedQuestPlace } = bookingDataSlice.actions;
