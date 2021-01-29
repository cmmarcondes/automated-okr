import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, TextField } from "../../elements";

const Keyresults = () => {
  const history = useHistory();
  const [KR, setKR] = useState([
    {
      key_result_name: "",
    },
  ]);

  const nextStep = () => {
    history.push("/details");
  };
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
        <div>
          <Button type="button" onClick={createNewKr}>
            create new key result
          </Button>
          <Button type="button" onClick={nextStep}>
            next step
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Keyresults;
