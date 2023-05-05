import solImg from "../../assets/solana.svg";
import ethImg from "../../assets/eth.svg";
import bnbImg from "../../assets/bnb.svg";
import ExchangeSummary from "./ExchangeSummary";

const ExchangeLeftContainer = () => {
  const options = [
    { coin: solImg, balance: 1211023512.34 },
    { coin: ethImg, balance: 512.01 },
    { coin: bnbImg, balance: 0.35 },
  ]

  return (
    <>
      <section>
            <h3>요약</h3>
            {options.map((item, index) => (
              <ExchangeSummary
                key={index} 
                coinImg={item.coin}
                coinBalance={item.balance}
              />
            ))}
          </section>
    </>
  )
}

export default ExchangeLeftContainer