import { FILTER_BY_TYPE, QuestType } from '../../const/quest-types';

type QuestTypesProps = {
  activeType: QuestType;
  onTypeChange: (type: QuestType) => void;
}

function QuestTypes({activeType, onTypeChange}: QuestTypesProps): JSX.Element {

  return (
    <ul className="filter__list">
      {FILTER_BY_TYPE.map(({type, title, picture}) => (
        <li className="filter__item" key={type}>
          <input type="radio" name="type" id={type}
            checked={type === activeType}
            onChange={() => {
              onTypeChange(type);
            }}
          />
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
