import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/const';
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
import { getAuthCheckedStatus } from '../../store/user-data/user-data-selectors';

function App(): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isLoading = useAppSelector(getLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isLoading) {
    return (
      <Loading />
    );
  }

  if (hasError) {
    return (
      <ErrorPage />);
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.MyQuests}
        element={
          <PrivateRoute>
            <MyQuestsPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Booking}
        element={
          <PrivateRoute>
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
      >
        <Route
          path={`${AppRoute.Quest}/:id`}
          element={<QuestPage />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
