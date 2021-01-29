import { ActionCreators } from "main/helpers/enum"

export const getNewGoal = (newGoal: string) => {
    return {
        type: ActionCreators.NEW_GOAL,
        payload: newGoal
    }
}