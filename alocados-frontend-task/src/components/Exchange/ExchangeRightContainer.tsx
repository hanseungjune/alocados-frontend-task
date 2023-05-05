import solImg from "../../assets/solana.svg";
import ethImg from "../../assets/eth.svg";
import convertImg from "../../assets/trade.svg";
import {
  StyleExchangeCompleteBtn,
  StyleExchangeConvertDiv,
} from "./style/ExchangeStyle";
import ExchangeHistoryCards from "./ExchangeHistoryCards";
import ExchangeFromTo from "./ExchangeFromTo";
import { useState, useEffect } from "react";
import convertCoin from '../../utils/coinConverter'

const recentHistory = [
  {
    regDt: "2023-03-12, AM 10:50",
    fromImg: ethImg,
    fromContent: 1302.44,
    toImg: solImg,
    toContent: 1302.44,
  },
];

const ExchangeRightContainer = () => {
  // 버튼 활성화, 비활성화
  const [isExchange, setIsExchange] = useState<boolean>(false);
  // 드롭다운으로 선택한 데이터
  const [fromCoin, setFromCoin] = useState<string>("SOL");
  const [toCoin, setToCoin] = useState<string>("SOL");
  // 인풋값 받아두기
  const [fromValue, setFromValue] = useState<number | string>("");
  const [toValue, setToValue] = useState<number | string>("");
  // 에러 메시지 받아오기
  const [error, setError] = useState<string>("");

  const handleExchange = () => {
    // 먼저 환전 from코인을 amount 만큼 주고, to코인을 얼마나 받아올지 CONVERT
    // 1. 0 입력 에러
    // 2. 잔액보다 더 많이 환전하려고 하면 에러

    // 3. SOL 2000, 이더는 자동으로 20개가 입력이 되어야한다. 
    // 그럼 이더 20으로 기록되는건 READonly 하면, 에러발생 안함

    
  };

  useEffect(() => {
    console.log(fromCoin, toCoin, fromValue, toValue);
  }, [fromCoin, toCoin, fromValue, toValue]);

  return (
    <>
      <section>
        {/* 일단 환전할코인이랑 환전할금액 */}
        <ExchangeFromTo
          title={`전환 수량 (FROM)`}
          value={"from"}
          toCoin={toCoin}
          fromCoin={fromCoin}
          setToCoin={setToCoin}
          setFromCoin={setFromCoin}
          fromValue={fromValue}
          toValue={toValue}
          setFromValue={setFromValue}
          setToValue={setToValue}
          error={error}
          setError={setError}
        />
        <StyleExchangeConvertDiv>
          <div>
            <img src={convertImg} alt="convertImg" />
          </div>
        </StyleExchangeConvertDiv>
        {/* 일단 환전될코인이랑 환전될금액 */}
        <ExchangeFromTo
          title={`전환 수량 (TO)`}
          value={"to"}
          toCoin={toCoin}
          fromCoin={fromCoin}
          setToCoin={setToCoin}
          setFromCoin={setFromCoin}
          fromValue={fromValue}
          toValue={toValue}
          setFromValue={setFromValue}
          setToValue={setToValue}
          error={error}
          setError={setError}
        />
        <StyleExchangeCompleteBtn onClick={handleExchange}>
          환전
        </StyleExchangeCompleteBtn>
        <ExchangeHistoryCards
          regDt={recentHistory[0].regDt}
          fromImg={recentHistory[0].fromImg}
          fromContent={recentHistory[0].fromContent}
          toImg={recentHistory[0].toImg}
          toContent={recentHistory[0].toContent}
        />
      </section>
    </>
  );
};

export default ExchangeRightContainer;
