import React, { useState } from "react";
import { Button } from "../../elements/button";
import { Container } from "../../elements/container";
import { TextField } from "../../elements/textfield";
import { Title } from "../../elements/title";
import { OBJECTIVE_MAX_LENGTH } from "../../helpers/contants";
import ObjectiveArrow from "../../assets/Objective-Arrow.png";
import { useHistory } from "react-router-dom";

const Goals = () => {
  const [objective, setObjective] = useState("");
  const history = useHistory();

  const nextStep = () => {
    history.push("/key-results");
  };

  const objectiveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setObjective(value);
  };

  return (
    <Container>
      <img src={ObjectiveArrow} alt="Objective Arrow for OKR" width="150px" />
      <Title>Tell us about your objective</Title>
      <TextField
        placeholder="type here..."
        name="objective"
        maxLength={OBJECTIVE_MAX_LENGTH}
        value={objective}
        onChange={(e) => objectiveHandler(e)}
      />
      <Button type="button" onClick={nextStep}>
        next step
      </Button>
    </Container>
  );
};

export default Goals;
