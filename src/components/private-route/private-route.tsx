import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/user-data-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
