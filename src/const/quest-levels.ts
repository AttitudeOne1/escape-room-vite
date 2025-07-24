export enum QuestLevel {
    Any = 'any',
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard'
}

type QuestLevelFilter = {
    level: QuestLevel;
    title: string;
}[];

export const DEFAULT_LEVEL = QuestLevel.Any;

export const FILTER_BY_LEVEL: QuestLevelFilter = [
  { level: QuestLevel.Any, title: 'Любой' },
  { level: QuestLevel.Easy, title: 'Лёгкий' },
  { level: QuestLevel.Medium, title: 'Средний' },
  { level: QuestLevel.Hard, title: 'Сложный' },
];
