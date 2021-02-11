/* eslint-disable no-param-reassign */
import { ActionCreators } from 'main/helpers/contants';
import { ACTIONCREATORS } from 'main/helpers/enum';
import { IKeyResult } from 'main/store/protocol';

export const getNewGoal = (newGoal: string) => ({
  type: ACTIONCREATORS.NEW_GOAL,
  payload: newGoal,
});

export const getNewKrActive = (KrArray: IKeyResult[], index = 0) => {
  // eslint-disable-next-line no-return-assign
  KrArray.forEach((kr) => (kr.active = false));
  KrArray[index].active = true;
  return {
    type: ACTIONCREATORS.NEW_KR_ACTIVE,
    payload: KrArray,
  };
};

export const getNewKrInfo = (
  KrArray: IKeyResult[],
  newKrInfo: string,
  index: number,
  action: string,
  name: string,
) => {
  KrArray[index][name] = newKrInfo;
  return {
    type: ActionCreators[action],
    payload: KrArray,
  };
};

export const addNewKR = (newKR: IKeyResult[]) => {
  newKR.push({
    active: false,
    name: '',
    howitscalculated: '',
    information: '',
    att: '',
    target: '',
    currentvalue: '',
    progress: '',
  });
  return {
    type: ACTIONCREATORS.ADD_NEW_KR,
    payload: newKR,
  };
};
