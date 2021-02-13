/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';

import TabComponent from 'main/components/TabComponent';
import { DashboardTitle, Container } from 'main/elements';

import { connector, PropsFromRedux } from 'main/helpers/connector';
import { CircularProgressbar } from 'react-circular-progressbar';
import DashboardContentComponent from 'main/components/DashboardContentComponent';
import 'react-circular-progressbar/dist/styles.css';

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
        {datas.kr.map((keyResult, index) =>
          keyResult.active ? (
            <>
              <DashboardContentComponent index={index} />
              {/*               <TargetComponent key={keyResult.name}>
                {keyResult.target}
              </TargetComponent> */}
              <div className="current_value">
                <CircularProgressbar
                  value={+keyResult.currentvalue}
                  maxValue={keyResult.target}
                  text={`${
                    (+keyResult.currentvalue / keyResult.target) * 100 || 0
                  }`}
                  strokeWidth={2}
                />
              </div>
            </>
          ) : (
            <></>
          ),
        )}
      </div>
    </div>
  </Container>
);

export default connector(Dashboard);
