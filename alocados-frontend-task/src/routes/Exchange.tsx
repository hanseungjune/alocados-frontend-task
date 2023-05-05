import ExchangeLeftContainer from "../components/Exchange/ExchangeLeftContainer";
import ExchangeRightContainer from "../components/Exchange/ExchangeRightContainer";
import {
  StyleExchangeContainer,
  StyleExchangeSection,
} from "../components/Exchange/style/ExchangeStyle";
import styled from "styled-components";
import { useState } from "react";
import ExchangeAlert from "../components/Exchange/ExchangeAlert";

export const StyleRefetchAlert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  border-radius: 12px;
  background-color: rgba(53, 85, 227, 0.12);
  padding-left: 20px;
  padding-right: 20px;
  color: rgba(55, 86, 228, 1);

  & > div > span {
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
  }
`;

const Exchange = () => {
  const [isAlert, setIsAlert] = useState(false);

  const handleAlert = () => {
    setIsAlert(!isAlert);
  };

  return (
    <StyleExchangeContainer>
      <div>
        <h3>환전하기</h3>
        {/* 거래시 갱신 alert 필요 */}
        {isAlert ? <ExchangeAlert handleAlert={handleAlert} /> : null}
        <StyleExchangeSection>
          <ExchangeLeftContainer />
          <ExchangeRightContainer />
        </StyleExchangeSection>
      </div>
    </StyleExchangeContainer>
  );
};

export default Exchange;
