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
  Data = 'DATA',
  User = 'USER',
}

export enum APIRoute {
  Quest = '/quest',
  // Comments = '/comments',
  // Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}
