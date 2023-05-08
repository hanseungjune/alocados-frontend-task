import styled from "styled-components";
import { color } from '../../Nav/style/NavStyle';

// 거래내역 스타일
export const StyleExchangeHistoryContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 거래내역 헤더 스타일
export const StyleExchangeHistoryHeader = styled.header`
  border-radius: 12px;
  margin-bottom: 5px;
  background-color: ${color.primary};
  width: 37vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  & > div > button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: 900;
    font-size: 1rem;
  }

  & > div > span {
    font-size: 1rem;
  }
`;