/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { TextField } from 'main/elements/index';
import { connector, PropsFromRedux } from 'main/helpers/connector';
import { ACTIONCREATORS } from 'main/helpers/enum';
import { Container } from './styles';

interface ICurrentValue {
  children?: React.ReactChild;
  index: number;
}

const DashboardContentComponent: React.FC<PropsFromRedux & ICurrentValue> = ({
  datas,
  index,
  dispatchNewKrInfo,
}) => (
  <Container>
    <TextField
      required
      label="Current Value"
      name="currentvalue"
      color="#F1E3D3"
      value={datas.kr[index].currentvalue}
      onChange={(e) =>
        dispatchNewKrInfo(
          datas.kr,
          e.target.value,
          index,
          ACTIONCREATORS.NEW_KR_CURRENT_VALUE,
          e.target.name,
        )
      }
    />
    <TextField
      required
      disabled
      label="This is your target"
      name="target"
      color="#F1E3D3"
      value={datas.kr[index].target}
      onChange={(e) =>
        dispatchNewKrInfo(
          datas.kr,
          e.target.value,
          index,
          ACTIONCREATORS.NEW_KR_TARGET,
          e.target.name,
        )
      }
    />
  </Container>
);

export default connector(DashboardContentComponent);
