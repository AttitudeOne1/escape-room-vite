import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CardItem from '../../components/card/card-item';
import QuestLevels from '../../components/main/quest-levels';
import QuestTypes from '../../components/main/quest-types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveLevel, getActiveType, getQuests } from '../../store/quests-data/quest-data-selectors';
import { QuestLevel } from '../../const/quest-levels';
import { changeLevel, changeType } from '../../store/quests-data/quests-data-slice';
import { QuestType } from '../../const/quest-types';
import MainEmpty from '../../components/main/main-empty';

function MainPage(): JSX.Element {
  const quests = useAppSelector(getQuests);
  const activeLevel = useAppSelector(getActiveLevel);
  const activeType = useAppSelector(getActiveType);

  const filteredQuests = quests.filter((quest) => {
    const isValidLevel = activeLevel === QuestLevel.Any || quest.level === activeLevel;
    const isValidType = activeType === QuestType.All || quest.type === activeType;
    return isValidLevel && isValidType;
  });

  const dispatch = useAppDispatch();

  function handleQuestLevelChange(level: QuestLevel) {
    dispatch(changeLevel(level));
  }

  function handleQuestTypeChange(type: QuestType) {
    dispatch(changeType(type));
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <Header />
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
                <QuestTypes activeType={activeType} onTypeChange={handleQuestTypeChange} />
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <QuestLevels activeLevel={activeLevel} onLevelChange={handleQuestLevelChange} />
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {filteredQuests.length !== 0 ?
              filteredQuests.map((quest) => <CardItem questCard={quest} key={quest.id} />)
              : <MainEmpty />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
