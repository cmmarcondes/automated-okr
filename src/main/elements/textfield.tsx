/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

interface IVariant
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  secondary?: boolean;
}

interface IColor {
  color?: string;
}

const Container = styled.div<IColor>`
  .block {
    position: relative;

    input {
      width: 100%;

      margin-top: 30px;
      padding: 10px;

      font-size: 18px;
      font-weight: lighter;
      letter-spacing: 2px;
      color: ${({ color }) => color || '#160c28'};

      background-color: transparent;

      outline: none;
      border: none;
      border-bottom: 2px solid ${({ color }) => color || '#160c28'};

      &:focus ~ label,
      &:disabled ~ label,
      &:valid ~ label {
        bottom: 40px;
        transition: 0.5s;

        color: #8e5572;
      }

      &:focus,
      &:disabled,
      &:valid {
        border-bottom: 2px solid #8e5572;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }

    label {
      color: ${({ color }) => color || '#8e8e8e'};

      position: absolute;

      left: 5px;
      bottom: 10px;

      pointer-events: none;

      transition: 0.3s;

      font-size: 18px;

      white-space: nowrap;
    }
  }
`;

const TextField: React.FC<IVariant> = ({ label, ...props }) => (
  <Container color={props.color}>
    <div className="block">
      <input {...props} />
      <label>{label}</label>
    </div>
  </Container>
);

export { TextField };
