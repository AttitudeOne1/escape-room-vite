import { Link, useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/user-data-selectors';
import { logoutAction } from '../../store/api-actions';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const location = useLocation();
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={`link ${location.pathname === AppRoute.Main ? 'active' : ''}`} to={AppRoute.Main}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${location.pathname === AppRoute.Contacts ? 'active' : ''}`} to={AppRoute.Contacts}>Контакты</Link>
            </li>
            {authorizationStatus === AuthorizationStatus.Auth ?
              <li className="main-nav__item">
                <Link className={`link ${location.pathname === AppRoute.MyQuests ? 'active' : ''}`} to={AppRoute.MyQuests}>Мои бронирования</Link>
              </li> : ''}
          </ul>
        </nav>
        <div className="header__side-nav">
          {authorizationStatus === AuthorizationStatus.NoAuth ?
            <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
            :
            <Link className="btn btn--accent header__side-item" to={AppRoute.Main}
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >Выйти
            </Link>}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
