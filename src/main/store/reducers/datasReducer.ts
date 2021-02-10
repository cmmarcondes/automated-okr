import { PayloadAction } from '@reduxjs/toolkit';
import { ActionCreators } from 'main/helpers/enum';
import { IOkr } from 'main/store/protocol';

export const dataReducer = (state: IOkr, action: PayloadAction<IOkr>) => {
  const krInitialState = {
    active: false,
    name: '',
    howitscalculated: '',
    information: '',
    att: '',
    target: '',
    currentvalue: '',
    progress: '',
  };

  switch (action.type) {
    case ActionCreators.NEW_GOAL:
      return {
        ...state,
        objective: {
          goal: action.payload,
          kr: state.objective.kr,
        },
      };
    case ActionCreators.ADD_NEW_KR:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ActionCreators.NEW_KR_ACTIVE:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };

    case ActionCreators.NEW_KR_NAME:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ActionCreators.NEW_KR_HOWITSCALCULATED:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ActionCreators.NEW_KR_INFORMATION:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ActionCreators.NEW_KR_ATT:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ActionCreators.NEW_KR_TARGET:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    default:
      return {
        objective: {
          goal: '',
          kr: [krInitialState],
        },
      };
  }
};
