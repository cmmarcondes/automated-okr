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

  const prevStep = () => {
    history.push('/descriptions');
  };

  return (
    <>
      <Container>
        <div className="details-container">
          {datas.kr?.map((krDatas: IKeyResult, index: number) => (
            <div key={krDatas.name} className="wrapper">
              <div className="details-title">
                <Title>{krDatas.name}</Title>
              </div>
              <br />
              <div className="wrapper__content">
                <TextField
                  required
                  color="#F1E3D3"
                  label="How it is calculated"
                  name="howitscalculated"
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
                  required
                  color="#F1E3D3"
                  label="Information"
                  name="information"
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
              </div>

              <div className="wrapper__content">
                <TextField
                  required
                  color="#F1E3D3"
                  label="Frequence of attualization"
                  name="att"
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
                  required
                  color="#F1E3D3"
                  label="Target"
                  name="target"
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
            </div>
          ))}
        </div>
        <div className="button-container">
          <Button className="next-step" type="button" onClick={prevStep}>
            <i className="fas fa-long-arrow-alt-left" />
            &nbsp;prev step
          </Button>
          <Button className="next-step" type="button" onClick={nextStep}>
            next step&nbsp;
            <i className="fas fa-long-arrow-alt-right" />
          </Button>
        </div>
      </Container>
    </>
  );
};

export default connector(Details);
