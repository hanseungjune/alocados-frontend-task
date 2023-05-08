import ExchangeLeftContainer from "../components/Exchange/ExchangeLeftContainer";
import ExchangeRightContainer from "../components/Exchange/ExchangeRightContainer";
import {
  StyleExchangeContainer,
  StyleExchangeSection,
} from "../components/Exchange/style/ExchangeStyle";
import { useState, useEffect } from "react";
import ExchangeAlert from "../components/Exchange/ExchangeAlert";

const Exchange = () => {
  const [isAlert, setIsAlert] = useState(false);

  // 경고창 끄기
  const handleAlert = () => {
    setIsAlert(!isAlert);
  };

  // 3초 뒤에 자동으로 꺼지게 하기
  useEffect(() => {
    if (isAlert === true) {
      const timeOut = setTimeout(() => {
        setIsAlert(false);
      }, 3000);
      return () => {
        clearTimeout(timeOut);
      }
    }
  }, [isAlert])

  return (
    <StyleExchangeContainer>
      <div>
        <h3>환전하기</h3>
        {/* 거래시 갱신 alert 필요 */}
        {isAlert ? <ExchangeAlert handleAlert={handleAlert}/> : null}
        <StyleExchangeSection>
          <ExchangeLeftContainer />
          <ExchangeRightContainer setIsAlert={setIsAlert}/>
        </StyleExchangeSection>
      </div>
    </StyleExchangeContainer>
  );
};

export default Exchange;
