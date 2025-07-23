import { QuestLevel } from '../../const/quest-levels';
import { QuestType } from '../../const/quest-types';
import { QuestList } from '../../types/types';

export const questsMock: QuestList = [
  {
    'id': 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
    'title': 'Склеп',
    'previewImg': 'img/content/crypt/crypt-size-s.jpg',
    'previewImgWebp': 'img/content/crypt/crypt-size-s.webp',
    'level': QuestLevel.Medium,
    'type': QuestType.Mystic,
    'peopleMinMax': [5, 6]
  },
  {
    'id': 'aba664c3-bdf3-4fb3-b8f3-42e007864aaa',
    'title': 'Маньяк',
    'previewImg': 'img/content/maniac/maniac-size-s.jpg',
    'previewImgWebp': 'img/content/maniac/maniac-size-s.webp',
    'level': QuestLevel.Hard,
    'type': QuestType.Horror,
    'peopleMinMax': [5, 7]
  },
  {
    'id': 'aba664c3-bdf3-4fb3-b8f3-42e007864hhh',
    'title': 'Тайны старого особняка',
    'previewImg': 'img/content/palace/palace-size-s.jpg',
    'previewImgWebp': 'img/content/palace/palace-size-s.webp',
    'level': QuestLevel.Medium,
    'type': QuestType.Detective,
    'peopleMinMax': [2, 5]
  },
];
