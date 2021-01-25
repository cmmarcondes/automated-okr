import React from 'react';
import { Button } from '../../elements/button';
import { Container } from '../../elements/container';
import { TextField } from '../../elements/textfield';
import { Title } from '../../elements/title';
import { OBJECTIVE_MAX_LENGTH } from '../../helpers/contants';
import ObjectiveArrow from '../../assets/Objective-Arrow.png';

const Goals = () => {
  return (
    <Container>
      <img src={ObjectiveArrow} alt="Objective Arrow for OKR" width="150px" />
      <Title>Tell us about your objective</Title>
      <TextField placeholder="type here..." maxLength={OBJECTIVE_MAX_LENGTH} />
      <Button type="button">next step</Button>
    </Container>
  );
}

export default Goals;
