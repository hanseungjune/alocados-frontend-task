import { useState } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import {
  StyleExchangeHistoryContainer,
  StyleExchangeHistoryHeader,
} from "../components/Exchange/style/ExchangeHistoryStyle";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ExchangeRecentHistory from "../components/Exchange/ExchangeRecentHistory";

export interface HistoryType {
  regDt: string,
  from: string,
  to: string,
  fromVal: string,
  toVal: string,
  fromImage: string,
  toImage: string,
  timestamp: string,
}

const ExchangeHistory = () => {
  const [isSort, setIsSort] = useState(true);
  const [rawHistories, setRawHistories] = useState<any[]>([]);
  const [sortedHistories, setSortedHistories] = useState<any[]>([]);
  const handleSort = () => {
    setIsSort(!isSort);
  };

  const historyArray = useSelector((state: any) => state.balancesReducer.historyArray);

  useEffect(() => {
    const clonedArray = [...historyArray]
    const sortedArrayDesc = clonedArray.sort((a: HistoryType, b: HistoryType) => {
      console.log(a, b)
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    setSortedHistories(sortedArrayDesc)

    const clonedArray2 = [...historyArray]
    const sortedArrayAsc = clonedArray2.sort((a: HistoryType, b: HistoryType) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });
    setRawHistories(sortedArrayAsc)
  }, [historyArray]);

  useEffect(() => {
    console.log(rawHistories)
    console.log(sortedHistories)
  }, [rawHistories, sortedHistories])

  return (
    <StyleExchangeHistoryContainer>
      <div
        style={{
          minHeight: '60vh',
          maxHeight: '70vh'
        }}
      >
        <h3>환전 내역</h3>
        <section>
          {/* 항목 */}
          <StyleExchangeHistoryHeader>
            <div onClick={handleSort}>
              {isSort ? (
                <button>
                  환전 시간 <FaArrowDown />
                </button>
              ) : (
                <button>
                  환전 시간 <FaArrowUp />
                </button>
              )}
            </div>
            <div>
              <span>환전금액</span>
            </div>
          </StyleExchangeHistoryHeader>
          {/* 최근 순으로 환전 내역 보여주기 */}
          {isSort === true ? rawHistories.map((item:any, index:number) => (
            <ExchangeRecentHistory
              key={index}
              history={item}
            />
          )) : null}
          {isSort === false ? sortedHistories.map((item:any, index:number) => (
            <ExchangeRecentHistory
              key={index}
              history={item}
            />
          )) : null}
        </section>
      </div>
    </StyleExchangeHistoryContainer>
  );
};

export default ExchangeHistory;
