import styled, { css, keyframes } from 'styled-components';
import { color } from '../../Nav/Nav';

export const SelectedItemButton = styled.button`
  width: 9rem;
  height: 8.5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.primary};
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > img:nth-of-type(1) {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MenuItemsList = styled.ul<{ isDrop: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  width: calc(9rem - 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FAFBFC;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  list-style: none;
  /* 애니메이션 */
  transition: 0.2s ease-in-out;
  animation: ${({ isDrop }) =>
    isDrop
      ? css`
          ${fadeIn} 0.2s ease-in-out
        `
      : ``};

  & > li:nth-of-type(2), & > li:nth-of-type(3) {
    margin-top: 0.5rem;
  }
`;

export const MenuItemButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover {
    background-color: #f5f5f5;
  }

  &.selected {
    color: white;
    width: 100%;
    padding: 0.4rem;
    border-radius: 12px;
    background-color: #9873ff;
  }

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;