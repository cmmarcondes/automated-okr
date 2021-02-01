/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import {
  getNewKrAtt,
  getNewKrCalc,
  getNewKrInformation,
  getNewKrTarget,
} from 'main/store/actions/datas';
import { IKeyResult, IOkr } from 'main/store/protocol';
import { Button, Container, TextField, Title } from '../../elements';

const mapStateToProps = (state: { datas: IOkr }) => ({
  datas: state.datas.objective,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchNewKrCalc(KrArray: IKeyResult[], newKrCalc: string, index: number) {
    const action = getNewKrCalc(KrArray, newKrCalc, index);
    dispatch(action);
  },
  dispatchNewKrInfo(KrArray: IKeyResult[], newKrInfo: string, index: number) {
    const action = getNewKrInformation(KrArray, newKrInfo, index);
    dispatch(action);
  },
  dispatchNewKrAtt(KrArray: IKeyResult[], newKrAtt: string, index: number) {
    const action = getNewKrAtt(KrArray, newKrAtt, index);
    dispatch(action);
  },
  dispatchNewKrTarget(
    KrArray: IKeyResult[],
    newKrTarget: string,
    index: number,
  ) {
    const action = getNewKrTarget(KrArray, newKrTarget, index);
    dispatch(action);
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Details: React.FC<PropsFromRedux> = ({
  datas,
  dispatchNewKrCalc,
  dispatchNewKrAtt,
  dispatchNewKrInfo,
  dispatchNewKrTarget,
}) => {
  const history = useHistory();

  const nextStep = () => {
    history.push('/details');
  };

  return (
    <>
      <Container>
        {datas.kr?.map((krDatas: IKeyResult, index: number) => (
          <div className="wrapper">
            <Title>{krDatas.name}</Title>
            <br />
            <TextField
              placeholder="how are you going to calculate this key result?"
              onChange={(e) =>
                dispatchNewKrCalc(datas.kr, e.target.value, index)
              }
            />
            <TextField
              placeholder="what is the source of information?"
              onChange={(e) =>
                dispatchNewKrInfo(datas.kr, e.target.value, index)
              }
            />
            <TextField
              placeholder="what frequence do you wanna att this key result?"
              onChange={(e) =>
                dispatchNewKrAtt(datas.kr, e.target.value, index)
              }
            />
            <TextField
              placeholder="what is the target?"
              onChange={(e) =>
                dispatchNewKrTarget(datas.kr, e.target.value, index)
              }
            />
          </div>
        ))}
        <Button type="button" onClick={nextStep}>
          next step
        </Button>
      </Container>
    </>
  );
};

export default connector(Details);
