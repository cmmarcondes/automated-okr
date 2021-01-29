import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Label, TextField } from "../../elements";

const Details = () => {
  const history = useHistory();

  const nextStep = () => {
    history.push("/details");
  };

  return (
    <>
      <Container>
          <Label>KR will be here</Label>
          <TextField placeholder={`como essa kr é calculada?`} />
          <TextField placeholder={`Fonte da informação`} />
          <TextField placeholder={`Frequência de atualização`} />
          <TextField placeholder={`Valor alvo`} />
          <Button type="button" onClick={nextStep}>
            next step
          </Button>
      </Container>
    </>
  );
};

export default Details;
