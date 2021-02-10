import TabComponent from 'main/components/TabComponent';
import { DashboardTitle, Container } from 'main/elements';
import { IOkr } from 'main/store/protocol';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = (state: { datas: IOkr }) => ({
  datas: state.datas.objective,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Dashboard: React.FC<PropsFromRedux> = ({ datas }) => (
  <Container>
    <DashboardTitle>{datas.goal}</DashboardTitle>
    <div className="dashboard__container">
      <div className="dashboard__wrapper">
        {datas.kr.map((keyResult, index) => (
          <TabComponent key={keyResult.name} index={index}>
            {keyResult.name}
          </TabComponent>
        ))}
      </div>
      <div className="dashboard__content" />
    </div>
  </Container>
);

export default connector(Dashboard);
