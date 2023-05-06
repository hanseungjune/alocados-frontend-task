import { StyleExchangeRecentHistoryDiv } from "./style/ExchangeStyle";
import rightImg from "../../assets/right.svg";
import { ExchangeHistoryCardsProps } from "./type/ExchangeType";

const ExchangeHistoryCards = ({
  regDt,
  fromImg,
  fromContent,
  toImg,
  toContent,
  timestamp,
  from,
  to
}: ExchangeHistoryCardsProps) => {
  return (
    <StyleExchangeRecentHistoryDiv>
      {timestamp ? (
        <>
          <div>
            <span>
              {regDt}
            </span>
          </div>
          <div>
            <img src={fromImg} alt="ethImg" />
            <span>
              {fromContent} {from}
            </span>
            <img src={rightImg} alt="" />
            <img src={toImg} alt="solanaImg" />
            <span>
              {toContent} {to}
            </span>
          </div>
        </>
      ) : (
        <div>현재 거래이력이 없습니다.</div>
      )}
    </StyleExchangeRecentHistoryDiv>
  );
};

export default ExchangeHistoryCards;
