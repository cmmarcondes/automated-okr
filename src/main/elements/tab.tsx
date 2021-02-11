import styled from 'styled-components';

interface IActiveTab {
  active: boolean;
}
export const Tab = styled.div<IActiveTab>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: 600;
  letter-spacing: 3px;

  width: 20%;

  border-radius: 10px 10px 0 0;

  background-color: white;
  opacity: ${({ active }) => (active ? '1' : '0.6')};

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: white;
    opacity: 1;

    transition: all 0.2s ease-in-out;
  }
`;
