/* eslint-disable no-param-reassign */
import { ActionCreators } from 'main/helpers/enum';
import { IKeyResult } from 'main/store/protocol';

export const getNewGoal = (newGoal: string) => ({
  type: ActionCreators.NEW_GOAL,
  payload: newGoal,
});

export const getNewKrActive = (KrArray: IKeyResult[], index = 0) => {
  // eslint-disable-next-line no-return-assign
  KrArray.forEach((kr) => (kr.active = false));
  KrArray[index].active = true;
  return {
    type: ActionCreators.NEW_KR_ACTIVE,
    payload: KrArray,
  };
};

export const getNewKrName = (
  KrArray: IKeyResult[],
  newKrName: string,
  index: number,
) => {
  KrArray[index].name = newKrName;
  return {
    type: ActionCreators.NEW_KR_NAME,
    payload: KrArray,
  };
};

export const getNewKrCalc = (
  KrArray: IKeyResult[],
  newKrCalc: string,
  index: number,
) => {
  KrArray[index].howitscalculated = newKrCalc;
  return {
    type: ActionCreators.NEW_KR_HOWITSCALCULATED,
    payload: KrArray,
  };
};

export const getNewKrInformation = (
  KrArray: IKeyResult[],
  newKrInformation: string,
  index: number,
) => {
  KrArray[index].information = newKrInformation;
  return {
    type: ActionCreators.NEW_KR_INFORMATION,
    payload: KrArray,
  };
};

export const getNewKrAtt = (
  KrArray: IKeyResult[],
  newKrAtt: string,
  index: number,
) => {
  KrArray[index].att = newKrAtt;
  return {
    type: ActionCreators.NEW_KR_ATT,
    payload: KrArray,
  };
};

export const getNewKrTarget = (
  KrArray: IKeyResult[],
  newKrTarget: string,
  index: number,
) => {
  KrArray[index].target = newKrTarget;
  return {
    type: ActionCreators.NEW_KR_TARGET,
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
    type: ActionCreators.ADD_NEW_KR,
    payload: newKR,
  };
};
