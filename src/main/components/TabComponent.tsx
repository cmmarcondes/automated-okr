import React from 'react';
import { Tab } from 'main/elements/index';
import { IKeyResult, IOkr } from 'main/store/protocol';
import { getNewKrActive } from 'main/store/actions/datas';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: { datas: IOkr }) => ({
  datas: state.datas.objective,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchNewKrActive(KrArray: IKeyResult[], index: number) {
    const action = getNewKrActive(KrArray, index);
    dispatch(action);
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

interface ITab {
  index: number;
}
type PropsFromRedux = ConnectedProps<typeof connector> & ITab;

const TabComponent: React.FC<PropsFromRedux> = ({
  children,
  datas,
  index,
  dispatchNewKrActive,
}) => (
  <Tab
    onClick={() => dispatchNewKrActive(datas.kr, index)}
    active={datas.kr[index].active}
  >
    {children}
  </Tab>
);

export default connector(TabComponent);
