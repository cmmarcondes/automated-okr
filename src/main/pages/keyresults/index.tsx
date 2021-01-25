import React, { useState } from "react";
import { Button } from "../../elements/button";
import { Container } from "../../elements/container";
import { TextField } from "../../elements/textfield";

const Keyresults = () => {
  const [KR, setKR] = useState([
    {
      key_result_name: "",
    },
  ]);

  const createNewKr = () => {
    const newKR = [...KR];
    newKR.push({
      key_result_name: "",
    });
    setKR(newKR);
  };

  return (
    <>
      <Container>
        {KR.map((input, index) => (
          <TextField placeholder={`digite a key result ${index}`} />
        ))}
        <Button type="button" onClick={createNewKr}>create new key result</Button>
      </Container>
    </>
  );
};

export default Keyresults;
