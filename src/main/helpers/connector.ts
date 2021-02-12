import {
  addNewKR,
  getNewGoal,
  getNewKrActive,
  getNewKrInfo,
} from 'main/store/actions/datas';
import { IKeyResult, IOkr } from 'main/store/protocol';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: { datas: IOkr }) => ({
  datas: state.datas.objective,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchNewGoal(newGoal: string) {
    const action = getNewGoal(newGoal);
    dispatch(action);
  },
  dispatchAddNewKr(newKr: IKeyResult[]) {
    const action = addNewKR(newKr);
    dispatch(action);
  },
  dispatchNewKrActive(KrArray: IKeyResult[], index: number) {
    const action = getNewKrActive(KrArray, index);
    dispatch(action);
  },
  dispatchNewKrInfo(
    KrArray: IKeyResult[],
    newKrInfo: string,
    index: number,
    actionCreator: string,
    name: string,
  ) {
    const action = getNewKrInfo(KrArray, newKrInfo, index, actionCreator, name);
    dispatch(action);
  },
});
export const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;
