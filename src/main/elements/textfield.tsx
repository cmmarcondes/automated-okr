import styled from 'styled-components';

export const TextField = styled.input`
    width: 400px;
    outline: none;

    margin-top: 20px;
    padding: 10px;

    border: none;
    border-bottom: 2px solid #42D9C8;

    font-size: 20px;
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
`;
