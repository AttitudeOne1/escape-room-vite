import { useForm } from 'react-hook-form';
import { ChangeEvent, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { postQuestBooking } from '../../store/api-actions';
import { getQuestInformation } from '../../store/quests-data/quest-data-selectors';
import { getQuestFormData, getSelectedQuestPlace } from '../../store/booking-data/booking-data-selectors';
import { AppRoute, Date } from '../../const/const';
import { useNavigate } from 'react-router-dom';
import { setIsWithChildren, setPeopleCount, setSelectedDate, setSelectedTime, setUserName, setUserPhone } from '../../store/booking-data/booking-data-slice';

type FormValues = {
    userName: string;
    userPhone: string;
    peopleCount: number;
    date: string;
}

function BookingForm(): JSX.Element {
  const questInformation = useAppSelector(getQuestInformation);
  const selectedLocation = useAppSelector(getSelectedQuestPlace);
  const formData = useAppSelector(getQuestFormData);
  const { register, formState: { errors, isValid }, reset } = useForm<FormValues>();
  const {slots} = selectedLocation;
  const {today, tomorrow} = slots;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (questInformation && questInformation.id) {
      dispatch(
        postQuestBooking({
          postData: formData,
          id: questInformation.id })
      );
    }
    navigate(AppRoute.MyQuests);
    reset();
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleFormSubmit}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {today.map(({time, isAvailable}) => (
              <label className="custom-radio booking-form__date" key={`today-${time}`}>
                <input type="radio"
                  id={`today-${time}`}
                  {...register('date', { required: true})}
                  value={time}
                  disabled={!isAvailable}
                  onChange={(evt) =>{
                    const dateToday = Date.Today;
                    dispatch(setSelectedDate(dateToday));
                    dispatch(setSelectedTime(evt.target.value));
                  }}
                />
                <span className="custom-radio__label">{time}</span>
              </label>
            )
            )}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {tomorrow.map(({time, isAvailable}) => (
              <label className="custom-radio booking-form__date" key={`tomorrow-${time}`}>
                <input type="radio"
                  id={`tomorrow-${time}`}
                  {...register('date', { required: true })}
                  value={time}
                  disabled={!isAvailable}
                  onChange={(evt) =>{
                    const dateTomorrow = Date.Tomorrow;
                    dispatch(setSelectedDate(dateTomorrow));
                    dispatch(setSelectedTime(evt.target.value));
                  }}
                />
                <span className="custom-radio__label">{time}</span>
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
          <input type="text" id="name" placeholder="Имя до 15 символов"
            onInput={(evt: ChangeEvent<HTMLInputElement>) => dispatch(setUserName(evt.target.value))}
            {...register('userName', {
              required: 'Укажите ваше имя',
              pattern: {
                value: /^[А-Яа-яЁёA-Za-z '-]{1,15}$/,
                message: 'Пожалуйста, укажите ваше имя',
              }
            })}
            aria-invalid={errors.userName ? 'true' : 'false'}
          />
          {errors.userName && <><br /><span role="alert">{errors.userName.message}</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" placeholder="Телефон в формате +7 (XXX)XXX-XX-XX"
            onInput={(evt: ChangeEvent<HTMLInputElement>) => dispatch(setUserPhone(evt.target.value))}
            {...register('userPhone', {
              required: 'Укажите ваше контактный телефон',
              pattern: {
                value: /^[А-Яа-яЁёA-Za-z \\'-\\s]{1,15}$/,
                message: 'Пожалуйста, введите номер в формате +7(999)999-99-99',
              }
            })}
            aria-invalid={errors.userPhone ? 'true' : 'false'}
          />
          {errors.userPhone && <><br /><span role="alert">{errors.userPhone.message}</span></>}
        </div>
        {questInformation && (
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="person">Количество участников</label>
            <input type="number" id="person"
              onInput={(evt: ChangeEvent<HTMLInputElement>) => dispatch(setPeopleCount(Number(evt.target.value)))}
              {...register('peopleCount', {
                required: 'Укажите количество участников',
                min: {
                  value: questInformation.peopleMinMax[0],
                  message: `Минимальное количество участников — ${questInformation.peopleMinMax[0]}`
                },
                max: {
                  value: questInformation.peopleMinMax[1],
                  message: `Максимальное количество участников — ${questInformation.peopleMinMax[1]}`
                }
              })}
              aria-invalid={errors.peopleCount ? 'true' : 'false'}
              placeholder={`Количество участников  от ${questInformation?.peopleMinMax[0]} до ${questInformation?.peopleMinMax[1]}`}
            />
            {errors.peopleCount && <><br /><span role="alert">{errors.peopleCount.message}</span></>}
          </div>
        )}
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" name="children"
            onChange={(evt) => dispatch(setIsWithChildren(evt.target.checked))}
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit" disabled={!isValid}>Забронировать</button>
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
  );
}

export default BookingForm;
