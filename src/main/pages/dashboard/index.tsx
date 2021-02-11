/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';

import TabComponent from 'main/components/TabComponent';
import TargetComponent from 'main/components/TargetComponent';
import { DashboardTitle, Container } from 'main/elements';

import { connector, PropsFromRedux } from 'main/helpers/connector';

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
      <div className="dashboard__content">
        {datas.kr.map((keyResult) =>
          keyResult.active ? (
            <TargetComponent key={keyResult.name}>
              {keyResult.target}
            </TargetComponent>
          ) : (
            <></>
          ),
        )}
      </div>
    </div>
  </Container>
);

export default connector(Dashboard);
