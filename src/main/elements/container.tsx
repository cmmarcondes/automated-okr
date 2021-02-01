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
`;
