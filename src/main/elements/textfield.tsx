import styled from 'styled-components';

export const TextField = styled.input`
  position: relative;

  width: 400px;
  outline: none;

  margin-top: 20px;
  padding: 10px;

  border: none;
  border-bottom: 2px solid #42d9c8;

  font-size: 18px;
  letter-spacing: 2px;
  font-weight: lighter;
  color: white;
  text-align: center;

  background-color: transparent;

  &::placeholder {
    color: white;
    font-weight: lighter;
  }

  &:focus {
    border-bottom: 2px solid white;
    transition: ease-in-out 0.2s;
  }

  span {
    .delete {
      position: absolute;

      right: 0;
      height: 100%;

      background-color: red;
      color: white;
    }
  }
`;
