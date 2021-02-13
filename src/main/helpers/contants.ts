export const OBJECTIVE_MAX_LENGTH = 20;
export const OBJECTIVE_MIN_LENGTH = 3;

export const NAME_MIN_LENGTH = 3;
export const KR_ARRAY_MAX_LENGTH = 4;

interface IActionCreators {
  NEW_KR_NAME: string;
  NEW_KR_HOWITSCALCULATED: string;
  NEW_KR_INFORMATION: string;
  NEW_KR_ATT: string;
  NEW_KR_TARGET: string;
  NEW_KR_CURRENT_VALUE: string;
  NEW_KR_PROGRESS: string;
  [key: string]: string | boolean;
}

export const ActionCreators: IActionCreators = {
  NEW_KR_NAME: 'NEW_KR_NAME',
  NEW_KR_HOWITSCALCULATED: 'NEW_KR_HOWITSCALCULATED',
  NEW_KR_INFORMATION: 'NEW_KR_INFORMATION',
  NEW_KR_ATT: 'NEW_KR_ATT',
  NEW_KR_TARGET: 'NEW_KR_TARGET',
  NEW_KR_CURRENT_VALUE: 'NEW_KR_CURRENT_VALUE',
  NEW_KR_PROGRESS: 'NEW_KR_PROGRESS',
};

export const DEFAULT_COLOR = {
  primary: '#693668',
};
