import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/user-data-selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getQuestInformation } from '../../store/quests-data/quest-data-selectors';
import { useEffect } from 'react';
import { fetchQuestInformation } from '../../store/api-actions';
import NotFoundPage from '../not-found-page/not-found-page';

function QuestPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const questInformation = useAppSelector(getQuestInformation);

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchQuestInformation(id));
    }
  }, [dispatch, id]);

  if (!questInformation || id === undefined) {
    return <NotFoundPage />;
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Информация о квесте</title>
      </Helmet>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${questInformation.coverImgWebp}, ${questInformation.coverImgWebp} 2x`} />
            <img src={questInformation.coverImg} srcSet={`${questInformation.coverImg} 2x`} width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{questInformation.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{questInformation.type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{questInformation.peopleMinMax[0]}&ndash;{questInformation.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{questInformation.level}
              </li>
            </ul>
            <p className="quest-page__description">{questInformation.description}</p>
            {authorizationStatus === AuthorizationStatus.Auth ?
              <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.Booking}>Забронировать</Link> :
              <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.Login}>Забронировать</Link>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default QuestPage;
