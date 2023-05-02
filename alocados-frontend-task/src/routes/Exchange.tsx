import styled from "styled-components";

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
    color: #2A3249;
  }
`

export const StyleExchangeSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  & > div {
    height: calc(100% - 1rem);
    margin: 1rem;
    border-radius: 12px;
  }
  
  /* 왼쪽 */
  & > article:nth-of-type(1) {
    background-color: #FAFBFC;
    width: calc(35% - 1rem);
  }

  /* 오른쪽 */
  & > article:nth-of-type(2) {
    border: 1px solid black;
    width: calc(65% - 1rem);
  }
`

const Exchange = () => {
  return (
    <StyleExchangeContainer>
      <div>
        <h3>환전하기</h3>
        <StyleExchangeSection>
          <article>
            <h3>요약</h3>
            <div>
              {/* Solana */}
              <span><img src='' alt="solanaImg"/> Solana</span>
              <span>1,211,023,512.34 SOL</span>
            </div>
            <div>
              {/* ETH */}
              <span><img src='' alt="ethImg"/> Ethereum</span>
              <span>512.01 ETH</span>
            </div>
            <div>
              {/* BNB */}
              <span><img src='' alt="bnbImg"/> BnB</span>
              <span>0.35 BNB</span>
            </div>
          </article>
          <article>

          </article>
        </StyleExchangeSection>
      </div>
    </StyleExchangeContainer>
  )
}

export default Exchange