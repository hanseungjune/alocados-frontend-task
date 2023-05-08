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

  // 잔액 조회
  const balances = useSelector((state:any) => state.balancesReducer)

  // 잔액 변경 될때 마다 지속적으로 데이터 반영
  useEffect(() => {
    setOptions([
      { coin: solImg, balance: balances.balances['SOL'] },
      { coin: ethImg, balance: balances.balances['ETH'] },
      { coin: bnbImg, balance: balances.balances['BNB'] },
    ]);
  }, [balances])

  return (
    <>
    {/* 각 코인별 잔액 컴포넌트 */}
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