import { PayloadAction } from '@reduxjs/toolkit';
import { ACTIONCREATORS } from 'main/helpers/enum';
import { IOkr } from 'main/store/protocol';

export const dataReducer = (state: IOkr, action: PayloadAction<IOkr>) => {
  const krInitialState = {
    active: true,
    name: '',
    howitscalculated: '',
    information: '',
    att: '',
    target: 0,
    currentvalue: '',
    progress: '',
  };

  switch (action.type) {
    case ACTIONCREATORS.NEW_GOAL:
      return {
        ...state,
        objective: {
          goal: action.payload,
          kr: state.objective.kr,
        },
      };
    case ACTIONCREATORS.ADD_NEW_KR:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ACTIONCREATORS.NEW_KR_ACTIVE:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };

    case ACTIONCREATORS.NEW_KR_NAME:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ACTIONCREATORS.NEW_KR_HOWITSCALCULATED:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ACTIONCREATORS.NEW_KR_INFORMATION:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ACTIONCREATORS.NEW_KR_ATT:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ACTIONCREATORS.NEW_KR_CURRENT_VALUE:
      return {
        ...state,
        objective: {
          goal: state.objective.goal,
          kr: action.payload,
        },
      };
    case ACTIONCREATORS.NEW_KR_TARGET:
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
