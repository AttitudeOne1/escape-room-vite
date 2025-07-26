import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchMyQuestsInformation } from '../../store/api-actions';
import { getMyQuests } from '../../store/booking-data/booking-data-selectors';
import MyQuestsPageEmpty from './my-quest-page-empty';
import MyQuestCard from '../../components/card/my-quest-card';

function MyQuestsPage(): JSX.Element {
  const myQuests = useAppSelector(getMyQuests);
  // console.log(myQuests);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMyQuestsInformation());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Забронированные квесты</title>
      </Helmet>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <div className="cards-grid">
            {
              myQuests.length !== 0 ?
                myQuests.map((quest) => <MyQuestCard key={quest.id} reservationInfo={quest} />) :
                <MyQuestsPageEmpty />
            }
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MyQuestsPage;
