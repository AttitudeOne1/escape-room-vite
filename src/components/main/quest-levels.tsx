import { FILTER_BY_LEVEL } from '../../const/quest-levels';

function QuestLevels(): JSX.Element {

  return (
    <ul className="filter__list">
      {FILTER_BY_LEVEL.map(({level, title}) => (
        <li className="filter__item" key={level}>
          <input type="radio" name="level" id={level} checked />
          <label className="filter__label" htmlFor={level}><span className="filter__label-text">{title}</span>
          </label>
        </li>)
      )}
    </ul>
  );
}

export default QuestLevels;
