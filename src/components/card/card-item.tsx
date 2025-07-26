import { Link } from 'react-router-dom';
import { QuestItem } from '../../types/types';
import { AppRoute } from '../../const/const';

type CardItemProps = {
  questCard: QuestItem;
};

function CardItem({ questCard }: CardItemProps): JSX.Element {
  const { id, title, previewImg, previewImgWebp, level, peopleMinMax } = questCard;
  const [peopleMin, peopleMax] = peopleMinMax;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <Link to={`${AppRoute.Quest}/${id}`}>
          <picture>
            <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp} 2x`} />
            <img src={previewImg} srcSet={previewImgWebp} width="344" height="232" alt={title} />
          </picture>
        </Link>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>{title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peopleMin}&ndash;{peopleMax}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardItem;
