/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Container, TextField, Title } from 'main/elements';

import { ACTIONCREATORS } from 'main/helpers/enum';
import { connector, PropsFromRedux } from 'main/helpers/connector';

import { IKeyResult } from 'main/store/protocol';

const Details: React.FC<PropsFromRedux> = ({ datas, dispatchNewKrInfo }) => {
  const history = useHistory();

  const nextStep = () => {
    history.push('/dashboard');
  };

  return (
    <>
      <Container>
        {datas.kr?.map((krDatas: IKeyResult, index: number) => (
          <div key={krDatas.name} className="wrapper">
            <Title>{krDatas.name}</Title>
            <br />
            <TextField
              name="howitscalculated"
              placeholder="how are you going to calculate this key result?"
              onChange={(e) =>
                dispatchNewKrInfo(
                  datas.kr,
                  e.target.value,
                  index,
                  ACTIONCREATORS.NEW_KR_HOWITSCALCULATED,
                  e.target.name,
                )
              }
            />
            <TextField
              name="information"
              placeholder="what is the source of information?"
              onChange={(e) =>
                dispatchNewKrInfo(
                  datas.kr,
                  e.target.value,
                  index,
                  ACTIONCREATORS.NEW_KR_INFORMATION,
                  e.target.name,
                )
              }
            />
            <TextField
              name="att"
              placeholder="what frequence do you wanna att this key result?"
              onChange={(e) =>
                dispatchNewKrInfo(
                  datas.kr,
                  e.target.value,
                  index,
                  ACTIONCREATORS.NEW_KR_ATT,
                  e.target.name,
                )
              }
            />
            <TextField
              name="target"
              placeholder="what is the target?"
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
          </div>
        ))}
        <Button className="next-step" type="button" onClick={nextStep}>
          next step&nbsp;
          <i className="fas fa-long-arrow-alt-right" />
        </Button>
      </Container>
    </>
  );
};

export default connector(Details);
