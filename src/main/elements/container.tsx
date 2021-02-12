import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  height: 100vh;

  background-color: #28464b;

  .details-container {
    display: flex;
    align-items: center;
    flex-direction: column;

    height: 60vh;

    overflow-y: auto;
  }

  .details-title {
    text-align: center;
    width: 100%;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 90%;

    background-color: #121e20;
    opacity: 0.3;

    padding: 20px;
    margin: 10px;

    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;

      width: 50%;
    }
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
      width: 90%;

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
