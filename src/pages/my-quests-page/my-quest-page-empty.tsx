import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import './my-quest-page-empty.css';

function MyQuestsPageEmpty(): JSX.Element {
  return (
    <div className="quest-card_empty">
      <p className="empty-text">Вы не забронировали ни одного квеста</p>
      <p className="empty-text">Чтобы выбрать квест, перейдите на главную страницу
        <Link className="link_quest-empty" to={AppRoute.Main}>
          <button className="btn btn--accent btn--general btn--empty" type="button">Вернуться на главную</button>
        </Link>
      </p>
    </div>
  );
}

export default MyQuestsPageEmpty;
