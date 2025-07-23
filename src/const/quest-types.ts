export enum QuestType {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic ='mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

type QuestTypeFilter = {
    type: QuestType;
    title: string;
    picture: string;
}[];

export const DEFAULT_TYPE = QuestType.All;

export const FILTER_BY_TYPE: QuestTypeFilter = [
  {type: QuestType.All, title: 'Все квесты', picture:'#icon-all-quests'},
  {type: QuestType.Adventures, title: 'Приключения', picture:'#icon-adventure'},
  {type: QuestType.Horror, title: 'Ужасы', picture:'#icon-horror'},
  {type: QuestType.Mystic, title: 'Мистика', picture:'#icon-mystic'},
  {type: QuestType.Detective, title: 'Детективы', picture:'#icon-detective'},
  {type: QuestType.SciFi, title: 'Sci-fi', picture:'#icon-sci-fi'}
];
