import solImg from "../../assets/solana.svg";
import ethImg from "../../assets/eth.svg";
import bnbImg from "../../assets/bnb.svg";
import convertImg from "../../assets/trade.svg";
import {
  StyleExchangeCompleteBtn,
  StyleExchangeConvertDiv,
} from "./style/ExchangeStyle";
import ExchangeHistoryCards from "./ExchangeHistoryCards";
import ExchangeFromTo from "./ExchangeFromTo";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalances, setHistory } from "../../reducer/balanceModules";
import convertCoin from "../../utils/coinConverter";

const options = [
  { coin: solImg, unit: "SOL" },
  { coin: ethImg, unit: "ETH" },
  { coin: bnbImg, unit: "BNB" },
];

const ExchangeRightContainer = () => {
  const dispatch = useDispatch();
  const balances = useSelector((state: any) => state.balancesReducer.balances);
  const status = useSelector((state: any) => state.balancesReducer.status);
  const history = useSelector(
    (state: any) => state.balancesReducer.historyArray
  );

  useEffect(() => {
    console.log(status);
    console.log(history);
  }, [balances]);

  // 드롭다운으로 선택한 데이터
  const [fromCoin, setFromCoin] = useState<string>("SOL");
  const [toCoin, setToCoin] = useState<string>("SOL");
  // 인풋값 받아두기
  const [fromValue, setFromValue] = useState<any>("");
  // 에러 메시지 받아오기
  const [error, setError] = useState<string>("");
  // 변환 금액
  // const convertValue = convertCoin(fromCoin, toCoin, fromValue)

  useEffect(() => {
    // 미입력
    if (fromValue === null || fromValue === undefined || fromValue === "") {
      setError("미입력입니다.");
    } // 1. 0 입력 에러
    else if (fromValue <= 0) {
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
  const { from, timestamp, to, value } = useSelector(
    (state: any) => state.balancesReducer
  );

  // 날짜 받아와서 주어진 형식대로 보여주기
  const year = `${new Date(timestamp).getFullYear()}`;
  const month = `${(new Date(timestamp).getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
  const date = `${new Date(timestamp).getDate().toString().padStart(2, "0")}`;
  const AMPM = `${new Date(timestamp).getHours() > 12 ? "AM" : "PM"}`;
  const hours = `${(new Date(timestamp).getHours() % 12 || 12)
    .toString()
    .padStart(2, "0")}`;
  const minutes = `${new Date(timestamp)
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const regDt = `${year}-${month}-${date}, ${AMPM} ${hours}:${minutes}`;

  //이미지랑 unit이랑 매칭하기
  const fromImage = options.find((item) => item.unit === from)?.coin;
  const toImage = options.find((item) => item.unit === to)?.coin;

  //코인 단위 변환
  const fromVal = Number(value)?.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  const toVal = convertCoin(from, to, value)?.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const handleExchange = () => {
    dispatch(setBalances({ fromCoin, toCoin, fromValue }));
    
    // 요청하고 나면 입력값들 전부 초기화
    setFromValue("");
    setFromCoin("SOL");
    setToCoin("SOL");
    setError("");
  };
  
  useEffect(() => {
    if (status) {
      dispatch(setHistory({ regDt, from, fromVal, to, toVal }));
    }
  }, [balances])

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
        <ExchangeHistoryCards
          regDt={`${year}-${month}-${date}, ${AMPM} ${hours}:${minutes}`}
          fromImg={fromImage}
          fromContent={fromVal}
          toImg={toImage}
          toContent={toVal}
          timestamp={timestamp}
          from={from}
          to={to}
        />
      </section>
    </>
  );
};

export default ExchangeRightContainer;
