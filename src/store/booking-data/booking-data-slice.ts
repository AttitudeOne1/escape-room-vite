import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BookingInfo, BookingInfoList, MyQuestList, QuestBooking } from '../../types/types';
import { NameSpace } from '../../const/const';
import { fetchBookingInformation, fetchMyQuestsInformation } from '../api-actions';

const initialFormData: QuestBooking = {
  date: '',
  time: '',
  contactPerson: '',
  phone: '',
  withChildren: false,
  peopleCount: 0,
  placeId: '',
};

type BookingData = {
    bookingInformation: BookingInfoList;
    isBookingInformationLoading: boolean;
    hasBookingError: boolean;
    selectedQuestPlace: BookingInfo;
    questFormData: QuestBooking;
    isBookingFormLoading: boolean;
    myQuests: MyQuestList;
    isMyQuestsLoading: boolean;
    selectedQuestPlaceId: string;
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
  questFormData: initialFormData,
  isBookingFormLoading: false,
  myQuests: [],
  isMyQuestsLoading: false,
  selectedQuestPlaceId: '',
};

export const bookingDataSlice = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {
    setSelectedQuestPlace: (state, action: PayloadAction<BookingInfo>) => {
      state.selectedQuestPlace = action.payload;
    },
    setSelectedQuestPlaceId: (state, action: PayloadAction<string>) => {
      state.questFormData.placeId = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.questFormData.contactPerson = action.payload;
    },
    setUserPhone: (state, action: PayloadAction<string>) => {
      state.questFormData.phone = action.payload;
    },
    setPeopleCount: (state, action: PayloadAction<number>) => {
      state.questFormData.peopleCount = action.payload;
    },
    setIsWithChildren: (state, action: PayloadAction<boolean>) => {
      state.questFormData.withChildren = action.payload;
    },
    setSelectedTime: (state, action: PayloadAction<string>) => {
      state.questFormData.time = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.questFormData.date = action.payload;
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

export const { setSelectedQuestPlace, setUserName, setUserPhone,
  setPeopleCount, setIsWithChildren, setSelectedTime,
  setSelectedDate, setSelectedQuestPlaceId
} = bookingDataSlice.actions;
