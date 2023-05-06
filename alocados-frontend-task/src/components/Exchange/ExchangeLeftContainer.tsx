import solImg from "../../assets/solana.svg";
import ethImg from "../../assets/eth.svg";
import bnbImg from "../../assets/bnb.svg";
import ExchangeSummary from "./ExchangeSummary";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ExchangeLeftContainer = () => {
  const [options, setOptions] = useState([
    { coin: solImg, balance: 0 },
    { coin: ethImg, balance: 0 },
    { coin: bnbImg, balance: 0 },
  ])
  const balances = useSelector((state:any) => state.balancesReducer)

  useEffect(() => {
    setOptions([
      { coin: solImg, balance: balances.balances['SOL'] },
      { coin: ethImg, balance: balances.balances['ETH'] },
      { coin: bnbImg, balance: balances.balances['BNB'] },
    ]);
  }, [balances])

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