import solImg from "../../assets/solana.svg";
import ethImg from "../../assets/eth.svg";
import bnbImg from "../../assets/bnb.svg";
import { StyleExchangeSummaryDiv } from "./style/ExchangeStyle";
import { ExchangeSummaryProps } from "./type/ExchangeType";

const ExchangeSummary = ({ coinImg, coinBalance }: ExchangeSummaryProps) => {
  const options = [
    { coin: solImg, unit: "SOL", name: "Solana" },
    { coin: ethImg, unit: "ETH", name: "Ethereum" },
    { coin: bnbImg, unit: "BNB", name: "BnB" },
  ];

  return (
    <StyleExchangeSummaryDiv>
      {/* Solana */}
      <span>
        <span>
          <img src={coinImg} alt="solanaImg" />
        </span>{" "}
        {options.find((option) => option.coin === coinImg)?.name}
      </span>
      <span>
        {coinBalance?.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 10,
        })}{" "}
        {options.find((option) => option.coin === coinImg)?.unit}
      </span>
    </StyleExchangeSummaryDiv>
  );
};

export default ExchangeSummary;
