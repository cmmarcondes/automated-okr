import React from 'react';
import { Tab } from 'main/elements/index';
import { connector, PropsFromRedux } from 'main/helpers/connector';

interface ITab {
  children?: React.ReactChild;
  index: number;
}

const TabComponent: React.FC<PropsFromRedux & ITab> = ({
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
