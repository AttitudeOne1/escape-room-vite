import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function Logo(): JSX.Element {
  return (
    <Link to={AppRoute.Main}>
      <span className="logo header__logo">
        <svg width="134" height="52" aria-hidden="true">
          <use xlinkHref="#logo"></use>
        </svg>
      </span>
    </Link>
  );
}

export default Logo;
