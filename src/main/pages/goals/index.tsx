import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button, Container, TextField, Title } from "../../elements";
import { OBJECTIVE_MAX_LENGTH } from "../../helpers/contants";
import ObjectiveArrow from "../../assets/Objective-Arrow.png";
import { useHistory } from "react-router-dom";
import { getNewGoal } from "main/store/actions/okr";

const mapStateToProps = (state: any) => {
  return {
    okr: state.okr,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getGoal(newGoal: string) {
      const action = getNewGoal(newGoal);
      dispatch(action);
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Goals: React.FC<PropsFromRedux> = ({ okr, getGoal }) => {
  const history = useHistory();

  const nextStep = () => {
    history.push("/descriptions");
  };

  return (
    <Container>
      <img src={ObjectiveArrow} alt="Objective Arrow for OKR" width="150px" />
      <Title>Tell us about your objective</Title>
      <TextField
        placeholder="type here..."
        name="objective"
        maxLength={OBJECTIVE_MAX_LENGTH}
        value={okr.goal}
        onChange={(e) => getGoal(e.target.value)}
      />
      <Button type="button" onClick={nextStep}>
        next step
      </Button>
    </Container>
  );
};

export default connector(Goals);
