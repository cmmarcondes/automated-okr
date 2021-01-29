import { PayloadAction } from "@reduxjs/toolkit";
import { ActionCreators } from "main/helpers/enum";
import { createStore, combineReducers } from "redux";
import { IOkr } from "./protocol";

const reducers = combineReducers({
  okr: function (state: IOkr, action: PayloadAction<IOkr>) {
    switch (action.type) {
      case ActionCreators.NEW_GOAL:
        return {
          ...state,
          objective: {
            goal: action.payload,
          },
        };
      default:
        return {
          objective: {
            goal: "",
            kr: [
              {
                name: "",
                howitscalculated: "",
                information: "",
                att: "",
                target: "",
                currentvalue: "",
                progress: "",
              },
            ],
          },
        };
    }
  },
});

function config() {
  return createStore(reducers);
}

export default config;
