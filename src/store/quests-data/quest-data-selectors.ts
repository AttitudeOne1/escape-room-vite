import { NameSpace } from '../../const/const';
import { QuestLevel } from '../../const/quest-levels';
import { QuestType } from '../../const/quest-types';
import { State } from '../../types/state';
import { Quest, QuestList } from '../../types/types';

export const getQuests = (state: Pick<State, NameSpace.Quest>): QuestList => state[NameSpace.Quest].quests;
export const getLoadingStatus = (state: Pick<State, NameSpace.Quest>): boolean => state[NameSpace.Quest].isLoading;
export const getErrorStatus = (state: Pick<State, NameSpace.Quest>): boolean => state[NameSpace.Quest].hasError;
export const getActiveLevel = (state: Pick<State, NameSpace.Quest>): QuestLevel => state[NameSpace.Quest].level;
export const getActiveType = (state: Pick<State, NameSpace.Quest>): QuestType => state[NameSpace.Quest].type;
export const getQuestInformation = (state: Pick<State, NameSpace.Quest>): Quest | null => state[NameSpace.Quest].questInformation;
