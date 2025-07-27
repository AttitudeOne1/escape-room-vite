import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchBookingInformation } from '../../store/api-actions';
import { getQuestInformation } from '../../store/quests-data/quest-data-selectors';
import { getBookingInformation, getSelectedQuestPlace } from '../../store/booking-data/booking-data-selectors';
import Loading from '../../components/loading/loading';
import BookingForm from '../../components/booking/booking-form';
import MapBooking from '../../components/map/map-booking';
import { setSelectedQuestPlaceId } from '../../store/booking-data/booking-data-slice';

function BookingPage(): JSX.Element {
  const questInformation = useAppSelector(getQuestInformation);
  const bookingInformation = useAppSelector(getBookingInformation);
  const selectedLocation = useAppSelector(getSelectedQuestPlace);

  const {location, id} = selectedLocation;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questInformation && questInformation.id) {
      dispatch(fetchBookingInformation(questInformation.id));
      dispatch(setSelectedQuestPlaceId(id));
    }
  }, [dispatch, questInformation, id]);

  if(!bookingInformation){
    <Loading/>;
  }

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
                <MapBooking questLocations={bookingInformation} latitude={location.coords[0]} longitude={location.coords[1]} />
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали:
                {location.address}
              </p>
            </div>
          </div>
          <BookingForm/>
        </div>
      </main >
      <Footer />
    </div >
  );
}

export default BookingPage;
