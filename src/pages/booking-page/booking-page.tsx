import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchBookingInformation } from '../../store/api-actions';
import { getQuestInformation } from '../../store/quests-data/quest-data-selectors';
import BookingForm from '../../components/booking/booking-form';

function BookingPage(): JSX.Element {
  const questInformation = useAppSelector(getQuestInformation);

  const id = useRef<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questInformation && questInformation.id) {
      id.current = questInformation.id;
      dispatch(fetchBookingInformation(id.current));
    }
  }, [dispatch, questInformation]);


  return (
    <div className="wrapper">
      <Helmet>
        <title>Бронирование квеста</title>
      </Helmet>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={questInformation?.coverImgWebp} />
            <img src={questInformation?.coverImg} srcSet={questInformation?.coverImgWebp} width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{questInformation?.title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container"></div>
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </main >
      <Footer />
    </div >
  );
}

export default BookingPage;
