import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './not-found-page.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function NotFoundPage(): JSX.Element {

  return (
    <div className="wrapper">
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="not_found_error">404. Page not found</h1>
          <Link className="link_not-found" to={AppRoute.Main}>Вернуться на главную</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
