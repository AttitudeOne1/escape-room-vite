import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="not_found_error">404. Page not found</h1>
          <a className="link_not-found" href="index.html">Вернуться на главную</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
