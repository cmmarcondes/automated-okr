/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { connector, PropsFromRedux } from 'main/helpers/connector';
import { verifyEmptyDatas } from 'main/helpers/functionUtils';
import { KR_ARRAY_MAX_LENGTH } from 'main/helpers/contants';
import { ACTIONCREATORS } from 'main/helpers/enum';

import { IKeyResult } from 'main/store/protocol';

import {
  Button,
  CreateKrButton,
  Container,
  TextField,
  Title,
} from 'main/elements';

const Keyresults: React.FC<PropsFromRedux> = ({
  datas,
  dispatchAddNewKr,
  dispatchNewKrInfo,
}) => {
  const history = useHistory();

  const nextStep = () => {
    history.push('/details');
  };

  const prevStep = () => {
    history.push('/');
  };

  return (
    <>
      <Container>
        <Title>How do you want to achieve this goal?</Title>
        {datas.kr?.map((input: IKeyResult, index: number) => (
          <TextField
            required
            label={`Key Result ${index + 1}`}
            name="name"
            onChange={(e) =>
              dispatchNewKrInfo(
                datas.kr,
                e.target.value,
                index,
                ACTIONCREATORS.NEW_KR_NAME,
                e.target.name,
              )
            }
          />
        ))}

        <CreateKrButton
          className="create-button"
          type="button"
          onClick={() => dispatchAddNewKr(datas.kr)}
          disabled={datas.kr.length > KR_ARRAY_MAX_LENGTH}
        >
          <i className="fas fa-plus" />
        </CreateKrButton>

        <div className="button-container">
          <Button className="next-step" type="button" onClick={prevStep}>
            <i className="fas fa-long-arrow-alt-left" />
            &nbsp;prev step
          </Button>
          <Button
            className="next-step"
            type="button"
            onClick={nextStep}
            disabled={verifyEmptyDatas(datas)}
          >
            next step&nbsp;
            <i className="fas fa-long-arrow-alt-right" />
          </Button>
        </div>
      </Container>
    </>
  );
};

export default connector(Keyresults);
