import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import { KR_ARRAY_MAX_LENGTH } from '../../helpers/contants';
import { addNewKR, getNewKrName } from '../../store/actions/datas';
import { IKeyResult, IOkr } from '../../store/protocol';

import { Button, Container, TextField, Title } from '../../elements/index';

const mapStateToProps = (state: { datas: IOkr }) => ({
  datas: state.datas.objective,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchAddNewKr(newKr: IKeyResult[]) {
    const action = addNewKR(newKr);
    dispatch(action);
  },
  dispatchNewKrName(KrArray: IKeyResult[], newKrName: string, index: number) {
    const action = getNewKrName(KrArray, newKrName, index);
    dispatch(action);
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Keyresults: React.FC<PropsFromRedux> = ({
  datas,
  dispatchAddNewKr,
  dispatchNewKrName,
}) => {
  const history = useHistory();

  const nextStep = () => {
    history.push('/details');
  };

  const verifyEmptyDatas = () =>
    datas.kr.map((d) => d.name === '').some((verify) => verify === true);

  return (
    <>
      <Container>
        <Title>How do you want to achieve this goal?</Title>
        {datas.kr?.map((input: IKeyResult, index: number) => (
          <TextField
            placeholder={`type the key result ${index + 1}`}
            onChange={(e) => dispatchNewKrName(datas.kr, e.target.value, index)}
          />
        ))}
        <div className="wrapper__buttons">
          <Button
            type="button"
            onClick={() => dispatchAddNewKr(datas.kr)}
            disabled={datas.kr.length > KR_ARRAY_MAX_LENGTH}
          >
            create new key result
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            disabled={verifyEmptyDatas()}
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
