import { Location } from '../types/types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Contacts = '/contacts',
  Quest = '/quest',
  MyQuests = '/my-quests',
  Booking = '/booking',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Quest = 'QUEST',
  User = 'USER',
  Booking = 'BOOKING',
}

export enum APIRoute {
  Quest = '/quest',
  Booking = '/booking',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout',
}

export const CURRENT_MARKER_URL = '/img/svg/pin-active.svg';

export const URL_MARKER_DEFAULT = '/img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = '/img/svg/pin-active.svg';

export const DEFAULT_OFFICE_LOCATION: Location = {
  address: '',
  coords: [59.968253, 30.317505]
};
