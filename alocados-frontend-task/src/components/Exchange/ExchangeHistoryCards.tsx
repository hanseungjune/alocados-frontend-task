import { StyleExchangeRecentHistoryDiv } from "./style/ExchangeStyle";
import rightImg from "../../assets/right.svg";
import solImg from "../../assets/solana.svg";
import ethImg from "../../assets/eth.svg";
import bnbImg from "../../assets/bnb.svg";
import { ExchangeHistoryCardsProps } from "./type/ExchangeType";

const ExchangeHistoryCards = ({
  regDt,
  fromImg,
  fromContent,
  toImg,
  toContent,
}: ExchangeHistoryCardsProps) => {
  const options = [
    { coin: solImg, unit: "SOL" },
    { coin: ethImg, unit: "ETH" },
    { coin: bnbImg, unit: "BNB" },
  ];

  return (
    <StyleExchangeRecentHistoryDiv>
      <div>
        <span>{regDt}</span>
      </div>
      <div>
        <img src={fromImg} alt="ethImg" />
        <span>
          {fromContent.toLocaleString()}{" "}
          {options.find((option) => option.coin === fromImg)?.unit}
        </span>
        <img src={rightImg} alt="" />
        <img src={toImg} alt="solanaImg" />
        <span>
          {toContent.toLocaleString()}{" "}
          {options.find((option) => option.coin === toImg)?.unit}
        </span>
      </div>
    </StyleExchangeRecentHistoryDiv>
  );
};

export default ExchangeHistoryCards;
