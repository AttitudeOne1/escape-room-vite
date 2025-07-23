import { Helmet } from 'react-helmet-async';
import './error-page.css';

function ErrorPage(): JSX.Element {

  return (
    <div className="error-screen-container">
      <Helmet>
        <title>Ошибка загрузки</title>
      </Helmet>
      <div className="error-message">
        <img src='public\img\bug-erreur.webp' alt="Error Icon" className="error-icon" />
        <h1 className="error-title">Упс! Произошла ошибка 😔</h1>
        <p className="error-text">
                    Мы не смогли загрузить ваши предложения.<br />Попробуйте ещё раз!
        </p>
        <button className="retry-button">
                    Повторить попытку
        </button>
      </div>
    </div>
  );
}
export default ErrorPage;
