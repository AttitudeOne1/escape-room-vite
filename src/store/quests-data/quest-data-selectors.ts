import { NameSpace } from '../../const/const';
import { QuestLevel } from '../../const/quest-levels';
import { QuestType } from '../../const/quest-types';
import { State } from '../../types/state';
import { Quest, QuestList } from '../../types/types';

export const getQuests = (state: Pick<State, NameSpace.Data>): QuestList => state[NameSpace.Data].quests;
export const getLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isLoading;
export const getErrorStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].hasError;
export const getActiveLevel = (state: Pick<State, NameSpace.Data>): QuestLevel => state[NameSpace.Data].level;
export const getActiveType = (state: Pick<State, NameSpace.Data>): QuestType => state[NameSpace.Data].type;
export const getQuestInformation = (state: Pick<State, NameSpace.Data>): Quest | null => state[NameSpace.Data].questInformation;
