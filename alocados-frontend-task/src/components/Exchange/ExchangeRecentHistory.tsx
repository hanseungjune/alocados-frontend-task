import { StyleExchangeRecentHistoryDiv } from "./style/ExchangeStyle";
import rightImg from "../../assets/right.svg";
import { ExchangeRecentHistoryProps } from "./type/ExchangeType";
import { useEffect, useState } from 'react';

const ExchangeRecentHistory = ({
  history
}: ExchangeRecentHistoryProps) => {
  const [isHistory, setHistory] = useState<boolean>(false);

  useEffect(() => {
    if (history) {
      setHistory(true)
    } else {
      setHistory(false)
    }
    console.log(history)
    console.log(isHistory)
  }, [history, isHistory])

  

  return (
    <StyleExchangeRecentHistoryDiv>
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
