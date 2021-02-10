import React from 'react';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { getNewGoal } from 'main/store/actions/datas';
import { IOkr } from 'main/store/protocol';

import {
  NAME_MIN_LENGTH,
  OBJECTIVE_MAX_LENGTH,
  OBJECTIVE_MIN_LENGTH,
} from 'main/helpers/contants';

import { Button, Container, TextField, Title } from 'main/elements';
import ObjectiveArrow from 'main/assets/Objective-Arrow.png';

const mapStateToProps = (state: { datas: IOkr }) => ({
  datas: state.datas.objective,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getGoal(newGoal: string) {
    const action = getNewGoal(newGoal);
    dispatch(action);
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Goals: React.FC<PropsFromRedux> = ({ datas, getGoal }) => {
  const history = useHistory();

  const nextStep = () => {
    history.push('/descriptions');
  };

  return (
    <Container>
      <img src={ObjectiveArrow} alt="Objective Arrow for OKR" width="150px" />
      <Title>Tell us, what is your objective?</Title>
      <TextField
        placeholder="type here..."
        name="goal"
        maxLength={OBJECTIVE_MAX_LENGTH}
        minLength={OBJECTIVE_MIN_LENGTH}
        value={datas.goal}
        onChange={(e) => getGoal(e.target.value)}
      />
      <div className="button-container">
        <Button
          className="next-step"
          type="submit"
          onClick={nextStep}
          disabled={datas.goal.length < NAME_MIN_LENGTH}
        >
          next step&nbsp;
          <i className="fas fa-long-arrow-alt-right" />
        </Button>
      </div>
    </Container>
  );
};

export default connector(Goals);
