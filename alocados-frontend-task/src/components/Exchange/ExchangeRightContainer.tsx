import convertImg from "../../assets/trade.svg";
import {
  StyleExchangeCompleteBtn,
  StyleExchangeConvertDiv,
} from "./style/ExchangeStyle";
import ExchangeFromTo from "./ExchangeFromTo";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalances } from "../../reducer/balanceModules";
import ExchangeRecentHistory from "./ExchangeRecentHistory";
import { ExchangeRightContainerProps } from "./type/ExchangeType";

const ExchangeRightContainer = ({ setIsAlert}: ExchangeRightContainerProps) => {
  const dispatch = useDispatch();
  const balances = useSelector((state: any) => state.balancesReducer.balances);

  // 드롭다운으로 선택한 데이터
  const [fromCoin, setFromCoin] = useState<string>("SOL");
  const [toCoin, setToCoin] = useState<string>("SOL");
  // 인풋값 받아두기
  const [fromValue, setFromValue] = useState<any>("");
  // 에러 메시지 받아오기
  const [error, setError] = useState<string>("");

  // 에러 체킹
  useEffect(() => {
    // 1. 0 입력 에러
    if (fromValue <= 0) {
      setError("최소금액 미달 입니다.");
    } // 2. 잔액보다 더 많이 환전하려고 하면 에러
    else if (balances[fromCoin] < fromValue) {
      setError("잔액 부족 입니다.");
    } // 3. 같은 단위는 환전 안됨
    else if (fromCoin === toCoin) {
      setError("같은 코인 입니다.");
    } else {
      setError("");
    }
  }, [balances, fromValue, fromCoin, toCoin]);

  // 거래 이력 관련 로직
  const state = useSelector((state: any) => state.balancesReducer.historyArray);

  const handleExchange = () => {
    setIsAlert(true);
    dispatch(setBalances({ fromCoin, toCoin, fromValue }));

    // 요청하고 나면 입력값들 전부 초기화
    setFromValue("");
    setFromCoin("SOL");
    setToCoin("SOL");
  };

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
          setFromValue={setFromValue}
          setError={setError}
        />
        {/* 환전을 암시하는 단순 이미지 */}
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
          setFromValue={setFromValue}
          setError={setError}
        />
        {/* 환전 버튼 */}
        <StyleExchangeCompleteBtn
          onClick={handleExchange}
          disabled={error ? true : false}
          style={{
            backgroundColor: error ? "#E0E2E8" : "#5D28F2",
            color: error ? "#5e5e5e" : "#ffffff",
            cursor: error ? "no-drop" : "pointer",
          }}
        >
          환전
        </StyleExchangeCompleteBtn>
        {/* 가장 최근 환전 이력 */}
        <ExchangeRecentHistory history={state[state.length - 1]} />
      </section>
    </>
  );
};

export default ExchangeRightContainer;
