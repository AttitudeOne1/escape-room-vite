import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { FormEvent, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchBookingInformation, postQuestBooking } from '../../store/api-actions';
import { getQuestInformation } from '../../store/quests-data/quest-data-selectors';
import { getBookingInformation } from '../../store/booking-data/booking-data-selectors';
import { AppRoute, DEFAULT_OFFICE_LOCATION } from '../../const/const';
import Map from '../../components/map/map';
import { Link } from 'react-router-dom';

function BookingPage(): JSX.Element {
  const questInformation = useAppSelector(getQuestInformation);
  // const bookingInformation = useAppSelector(getBookingInformation);
  // console.log(bookingInformation);

  // const handleChange = (selectedTime: string) => {
  //   console.log(`Selected Time: ${selectedTime}`);
  //   // Логика обработки выбора времени
  // };

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questInformation && questInformation.id) {
      dispatch(fetchBookingInformation(questInformation.id));
    }
  }, [dispatch, questInformation]);

  const bookingInformation = useAppSelector(getBookingInformation);
  // console.log(bookingInformation);

  const [selectedAddress, ] = useState(bookingInformation[0].location.address);
  const selectedLocationSlotsToday = bookingInformation.find((info) => info.location.address === selectedAddress)?.slots?.today || [];
  const selectedLocationSlotsTomorrow = bookingInformation.find((info) => info.location.address === selectedAddress)?.slots?.tomorrow || [];

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (questInformation && questInformation.id) {
      dispatch(
        postQuestBooking(questInformation.id)
      );
    }
    // console.log('форма отправлена');

  };

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
                <Map latitude={DEFAULT_OFFICE_LOCATION.coords[0]} longitude={DEFAULT_OFFICE_LOCATION.coords[1]} />
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали:
                {selectedAddress}
              </p>
            </div>
          </div>

          <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleFormSubmit}>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                <div className="booking-form__date-inner-wrapper">
                  {selectedLocationSlotsToday.map((booking) => (
                    <label className="custom-radio booking-form__date" key={`today-${booking.time}`}>
                      <input type="radio"
                        id={`today-${booking.time}`}
                        name="date"
                        required
                        value={`today-${booking.time}`}
                        disabled={!booking.isAvailable}
                        onChange={(evt) => evt.target.value}
                      />
                      <span className="custom-radio__label">{booking.time}</span>
                    </label>
                  )
                  )}
                </div>
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                <div className="booking-form__date-inner-wrapper">
                  {selectedLocationSlotsTomorrow.map((booking) => (
                    <label className="custom-radio booking-form__date" key={`tomorrow-${booking.time}`}>
                      <input type="radio"
                        id={`tomorrow-${booking.time}`}
                        name="date"
                        required
                        value={`tomorrow-${booking.time}`}
                        disabled={!booking.isAvailable}
                        onChange={(evt) => evt.target.value}
                      />
                      <span className="custom-radio__label">{booking.time}</span>
                    </label>
                  )
                  )}
                </div>
              </fieldset>
            </fieldset>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">Ваше имя</label>
                <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
                <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}" />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">Количество участников</label>
                <input type="number" id="person" name="person" placeholder="Количество участников" required />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input type="checkbox" id="children" name="children" checked />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
              </label>
            </fieldset>
            <Link to={AppRoute.MyQuests}>
              <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
            </Link>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
              <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>

        </div>
      </main >
      <Footer />
    </div >
  );
}

export default BookingPage;
