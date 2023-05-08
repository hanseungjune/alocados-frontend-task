import { StyleExchangeRecentHistoryDiv } from "./style/ExchangeStyle";
import rightImg from "../../assets/right.svg";
import { ExchangeRecentHistoryProps } from "./type/ExchangeType";
import { useEffect, useState } from 'react';

const ExchangeRecentHistory = ({
  history
}: ExchangeRecentHistoryProps) => {
  const [isHistory, setIsHistory] = useState<boolean>(false);

  // 환전 내역 여부에 따라
  useEffect(() => {
    if (history) {
      setIsHistory(true)
    } else {
      setIsHistory(false)
    }
  }, [history])

  return (
    <StyleExchangeRecentHistoryDiv>
      {/* 거래내역 컴포넌트 */}
      {isHistory ? <>
        <div>
          <span>{history.regDt}</span>
        </div>
        <div>
          {
            <img
              src={history.fromImage}
              alt={history.fromImage}
            />
          }
          <span>
            {history.fromVal} {history.from}
          </span>
          <img src={rightImg} alt="" />
          {
            <img
              src={history.toImage}
              alt={history.toImage}
            />
          }
          <span>
            {history.toVal} {history.to}
          </span>
        </div>
      </> : null}
    </StyleExchangeRecentHistoryDiv>
  );
};

export default ExchangeRecentHistory;
