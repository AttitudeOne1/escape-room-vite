import { Helmet } from 'react-helmet-async';
import './error-page.css';
import { useAppDispatch } from '../../hooks';
import { fetchQuestsAction } from '../../store/api-actions';

function ErrorPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="error-screen-container">
      <Helmet>
        <title>Ошибка загрузки</title>
      </Helmet>
      <div className="error-message">
        <img src='public\img\sprite\simple-vector-triangle-alert-sign_9834-1982.avif' alt="Error Icon" className="error-icon" />
        <h1 className="error-title">Упс! Произошла ошибка 😔</h1>
        <p className="error-text">
                    Мы не смогли загрузить ваши предложения.<br />Попробуйте ещё раз!
        </p>
        <button className="retry-button"
          onClick={() => {
            dispatch(fetchQuestsAction());
          }}
        >
                    Повторить попытку
        </button>
      </div>
    </div>
  );
}
export default ErrorPage;
