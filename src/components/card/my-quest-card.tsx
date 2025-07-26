import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { MyQuest } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { deleteMyQuest } from '../../store/api-actions';

type MyQuestCardProps = {
    reservationInfo: MyQuest;
  };

function MyQuestCard({reservationInfo}: MyQuestCardProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <Link to={`${AppRoute.Quest}/${reservationInfo.id}`}>
          <picture>
            <source type="image/webp" srcSet={reservationInfo.quest.previewImgWebp} />
            <img src={reservationInfo.quest.previewImg} srcSet={reservationInfo.quest.previewImgWebp} width="344" height="232" alt="Мужчина в маске в тёмном переходе." />
          </picture>
        </Link>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="quest.html">{reservationInfo.quest.title}</a>
          <span className="quest-card__info">[{reservationInfo.date},&nbsp;{reservationInfo.time}. {reservationInfo.location.address}]</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{reservationInfo.peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{reservationInfo.quest.level}
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button"
          onClick={() => {
            dispatch(deleteMyQuest(reservationInfo.id));
          }}
        >Отменить
        </button>
      </div>
    </div>
  );
}

export default MyQuestCard;
