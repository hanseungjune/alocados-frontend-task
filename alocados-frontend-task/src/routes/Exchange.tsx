import styled from "styled-components";
import solanaImg from "../assets/solana.svg";
import ethImg from "../assets/eth.svg";
import bnbImg from "../assets/bnb.svg";

export const StyleExchangeContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    width: 80%;
    height: 60%;
  }

  & > h3 {
    width: 100vw;
    text-align: left;
    color: #2a3249;
  }
`;

export const StyleExchangeSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  /* 왼쪽 */
  & > article:nth-of-type(1) {
    background-color: #fafbfc;
    width: calc(35% - 1rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;

    h3 {
      width: 80%;
      padding-bottom: 2vh;
      margin-bottom: 0%;
      border-bottom: 1px solid #adadad;
    }
  }

  /* 오른쪽 */
  & > article:nth-of-type(2) {
    border: 1px solid black;
    width: calc(65% - 1rem);
  }
`;

const StyleExchangeSummaryDiv = styled.div`
  margin: 2vh 0vw;
  display: flex;
  flex-direction: column;
  & > span:nth-of-type(1) {
    height: 4vh;
    display: flex;
    align-items: center;
    color: #4C5B7A;
  }

  & > span:nth-of-type(1) > span {
    width: 4vh;
    height: 4vh;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: #5a5a5a18;
    margin-right: 2%;
  }

  & > span:nth-of-type(2) {
    font-size: 1.2rem;
    font-weight: 900;
    margin-top: 1vh;
  }
`;

const Exchange = () => {
  return (
    <StyleExchangeContainer>
      <div>
        <h3>환전하기</h3>
        {/* 거래시 갱신 alert 필요 */}
        <StyleExchangeSection>
          <article>
            <h3>요약</h3>
            <StyleExchangeSummaryDiv>
              {/* Solana */}
              <span>
                <span>
                  <img src={solanaImg} alt="solanaImg" />
                </span>{" "}
                Solana
              </span>
              <span>1,211,023,512.34 SOL</span>
            </StyleExchangeSummaryDiv>
            <StyleExchangeSummaryDiv>
              {/* ETH */}
              <span>
                <span>
                  <img src={ethImg} alt="ethImg" />
                </span>{" "}
                Ethereum
              </span>
              <span>512.01 ETH</span>
            </StyleExchangeSummaryDiv>
            <StyleExchangeSummaryDiv>
              {/* BNB */}
              <span>
                <span>
                  <img src={bnbImg} alt="bnbImg" />
                </span>{" "}
                BnB
              </span>
              <span>0.35 BNB</span>
            </StyleExchangeSummaryDiv>
          </article>
          <article>
            <div>
              {/* 전환 FROM, Select */}
            </div>
            <div>
              {/* 환전 이미지 */}
            </div>
            <div>
              {/* 전환 TO, Select */}
            </div>
            <div>
              {/* 환전 버튼 */}
            </div>
            <div>
              {/* 가장 최근 환전 내역 */}
            </div>
          </article>
        </StyleExchangeSection>
      </div>
    </StyleExchangeContainer>
  );
};

export default Exchange;
