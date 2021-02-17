import styled from 'styled-components';

interface IButton {
  width?: string;
}

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;

  outline: none;
  border: none;
  border-radius: 6px;

  padding: 10px;
  margin: 20px;

  font-size: 18px;
  font-weight: 600;
  color: #8e5572;

  background-color: #160c28;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  i {
    margin-top: 4px;
    font-size: 22px;
  }
`;

export const CreateKrButton = styled(Button)`
  outline: none;
  border: none;
  border-radius: 100%;

  width: 35px;
  height: 35px;

  padding: 10px;
  margin: 20px;

  font-weight: 600;
  color: #8e5572;

  cursor: pointer;

  i {
    margin-top: 0px;
    font-size: 18px;
  }
`;
