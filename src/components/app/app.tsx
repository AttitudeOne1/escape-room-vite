import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import BookingPage from '../../pages/booking-page/booking-page';
import ContactsPage from '../../pages/contacts/contacts-page';
import QuestPage from '../../pages/quest-page/quest-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import { useAppSelector } from '../../hooks';
import { getLoadingStatus, getErrorStatus } from '../../store/quests-data/quest-data-selectors';
import Loading from '../loading/loading';
import ErrorPage from '../../pages/error-page/error-page';

function App(): JSX.Element {
  const isLoading = useAppSelector(getLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  // !isAuthChecked ||
  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (hasError) {
    return (
      <ErrorPage />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
                <MyQuestsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
                <BookingPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Contacts}
            element={<ContactsPage />}
          />
          <Route
            path={AppRoute.Quest}
            element={<QuestPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
