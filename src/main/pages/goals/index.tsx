import React from 'react';
import { useHistory } from 'react-router-dom';

import { connector, PropsFromRedux } from 'main/helpers/connector';
import {
  NAME_MIN_LENGTH,
  OBJECTIVE_MAX_LENGTH,
  OBJECTIVE_MIN_LENGTH,
} from 'main/helpers/contants';

import { Button, Container, TextField, Title } from 'main/elements';

import ObjectiveArrow from 'main/assets/Objective-Arrow.png';

const Goals: React.FC<PropsFromRedux> = ({ datas, dispatchNewGoal }) => {
  const history = useHistory();

  const nextStep = () => {
    history.push('/descriptions');
  };

  return (
    <Container>
      <img src={ObjectiveArrow} alt="Objective Arrow for OKR" width="150px" />
      <Title>Tell us, what is your objective?</Title>
      <TextField
        required
        label="Goal"
        name="goal"
        maxLength={OBJECTIVE_MAX_LENGTH}
        minLength={OBJECTIVE_MIN_LENGTH}
        value={datas.goal}
        onChange={(e) => dispatchNewGoal(e.target.value)}
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
