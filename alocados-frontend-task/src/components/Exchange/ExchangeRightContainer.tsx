import solImg from "../../assets/solana.svg";
import ethImg from "../../assets/eth.svg";
import convertImg from "../../assets/trade.svg";
import DropDownMenu from "./DropDownMenu"
import { StyleExchangeCompleteBtn, StyleExchangeConvertDiv, StyleExchangeFromDiv } from "./style/ExchangeStyle";
import ExchangeHistoryCards from "./ExchangeHistoryCards";
import ExchangeFromTo from "./ExchangeFromTo";
import { useState } from 'react';

const recentHistory = [
  {regDt: "2023-03-12, AM 10:50", fromImg: ethImg, fromContent: 1302.44, toImg: solImg, toContent: 1302.44 },
]

const ExchangeRightContainer = () => {
  // 버튼 활성화, 비활성화
  const [ isExchange, setIsExchange ] = useState<boolean>(false)

  return (
    <>
      <section>
            <ExchangeFromTo
              title={`전환 수량 (FROM)`}
              value={'from'}
            />
            <StyleExchangeConvertDiv>
              <div><img src={convertImg} alt="" /></div>
            </StyleExchangeConvertDiv>
            <ExchangeFromTo
              title={`전환 수량 (TO)`}
              value={'to'}
            />
            <StyleExchangeCompleteBtn>
              환전
            </StyleExchangeCompleteBtn>
            <ExchangeHistoryCards
              regDt={recentHistory[0].regDt}
              fromImg={recentHistory[0].fromImg}
              fromContent={recentHistory[0].fromContent}
              toImg={recentHistory[0].toImg}
              toContent={recentHistory[0].toContent}
            />
          </section>
    </>
  )
}

export default ExchangeRightContainer