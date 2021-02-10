import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-color: #28464b;

  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;

    background-color: #121e20;
    opacity: 0.3;

    padding: 10px;
    margin: 10px;

    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .button-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    width: 100%;
  }

  .dashboard {
    &__container {
      position: absolute;

      height: 60%;
      width: 80%;

      bottom: 0;

      padding: 20px 20px 0px 20px;
    }

    &__content {
      width: 100%;
      height: 88%;

      background-color: white;

      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    &__wrapper {
      display: flex;
      flex-direction: row;

      width: 100%;
      height: 12%;
    }
  }
`;
