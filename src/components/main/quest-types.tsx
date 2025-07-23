import { FILTER_BY_TYPE } from '../../const/quest-types';

function QuestTypes(): JSX.Element {

  return (
    <ul className="filter__list">
      {FILTER_BY_TYPE.map(({type, title, picture}) => (
        <li className="filter__item" key={type}>
          <input type="radio" name="type" id={type} checked/>
          <label className="filter__label" htmlFor={type}>
            <svg className="filter__icon" width="26" height="30" aria-hidden="true">
              <use xlinkHref={picture}></use>
            </svg><span className="filter__label-text">{title}</span>
          </label>
        </li>)
      )}
    </ul>
  );
}

export default QuestTypes;
