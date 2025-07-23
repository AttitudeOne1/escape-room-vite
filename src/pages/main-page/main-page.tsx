import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CardItem from '../../components/card/card-item';
import { questsMock } from '../../components/mock/quest-mock';
import QuestLevels from '../../components/main/quest-levels';
import QuestTypes from '../../components/main/quest-types';

function MainPage(): JSX.Element {

  return (
    <div className="wrapper">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <Header/>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <fieldset className="filter__section">
                <legend className="visually-hidden">Тематика</legend>
                <QuestTypes />
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <QuestLevels />
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {questsMock.map((questCard) =>
              <CardItem questCard={questCard} key={questCard.id}/>)}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default MainPage;
