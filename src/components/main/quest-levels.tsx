import { FILTER_BY_LEVEL, QuestLevel } from '../../const/quest-levels';

type QuestLevelsProps = {
  activeLevel: QuestLevel;
  onLevelChange: (level: QuestLevel) => void;
}

function QuestLevels({activeLevel, onLevelChange}: QuestLevelsProps): JSX.Element {

  return (
    <ul className="filter__list">
      {FILTER_BY_LEVEL.map(({level, title}) => (
        <li className="filter__item" key={level}>
          <input type="radio" name="level" id={level}
            checked={level === activeLevel}
            onChange={() => {
              onLevelChange(level);
            }}
          />
          <label className="filter__label" htmlFor={level}><span className="filter__label-text">{title}</span>
          </label>
        </li>)
      )}
    </ul>
  );
}

export default QuestLevels;
