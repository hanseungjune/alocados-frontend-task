import ExchangeHistoryCards from "../components/Exchange/ExchangeHistoryCards";
import { useState } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { StyleExchangeHistoryContainer, StyleExchangeHistoryHeader } from "../components/Exchange/style/ExchangeHistoryStyle";
import { history } from "../assets/options";

const ExchangeHistory = () => {
  const [isSort, setIsSort] = useState(false);

  const handleSort = () => {
    if (isSort) {
      setIsSort(false);
    } else {
      setIsSort(true);
    }
  };

  return (
    <StyleExchangeHistoryContainer>
      <div>
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
          {history.map((item, index) => (
            <ExchangeHistoryCards
              key={index}
              regDt={item.regDt}
              fromImg={item.fromImg}
              fromContent={item.fromContent}
              toImg={item.toImg}
              toContent={item.toContent}
            />
          ))}
        </section>
      </div>
    </StyleExchangeHistoryContainer>
  );
};

export default ExchangeHistory;
