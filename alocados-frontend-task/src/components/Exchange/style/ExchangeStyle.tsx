import styled from "styled-components";
import { color } from '../../Nav/style/NavStyle';

// 환전하기 페이지 전체
export const StyleExchangeContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 환전페이지 메인 화면 부분
export const StyleExchangeSection = styled.section`
  width: 60vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 왼쪽 */
  & > section:nth-of-type(1) {
    background-color: ${color.primary};
    width: 35%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding-left: 2rem;

    h3 {
      width: 80%;
      padding-bottom: 2vh;
      margin-bottom: 0%;
      border-bottom: 1px solid #adadad;
    }
  }

  /* 오른쪽 */
  & > section:nth-of-type(2) {
    width: 65%;
    height: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

// 현재 각 코인 잔액 컴포넌트 스타일
export const StyleExchangeSummaryDiv = styled.div`
  margin: 2vh 0vw;
  display: flex;
  flex-direction: column;
  & > span:nth-of-type(1) {
    height: 4vh;
    display: flex;
    align-items: center;
    color: #4c5b7a;
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

export interface StyleExchangeFromDivProps {
  fromValue : any
}

// 환전 기능 메인 스타일
export const StyleExchangeFromDiv = styled.div<StyleExchangeFromDivProps>`
  display: flex;
  height: 7vh;
  justify-content: space-between;
  align-items: center;

  /* 왼쪽 글 */
  & > div:nth-of-type(1) {
    width: 70%;
    height: 8.5vh;
    background-color: ${color.primary};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0.5rem;
    font-size: 0.7rem;
    span:nth-of-type(2) {
      font-size: 1rem;
      font-weight: 900;
    }
  }

  & > div:nth-of-type(1):focus-within {
    outline: 2px solid rgba(93, 40, 242, 0.24);
  }

  & > div:nth-of-type(1) {
    outline: ${props => props.fromValue === '0' ? '2px solid red !important' : 'none'} ;
  }

  /* 오른쪽 드롭다운 */
  & > div:nth-of-type(2) {
    margin-left: 1rem;
    position: relative;
  }

  & > div > input {
    width: 26vw;
    height: 3vh;
    border: none;
    background-color: ${color.primary};
    font-weight: bold;
    font-size: 1.1rem;
    outline: none;
  }
`

// 자동으로 변환되어 입력되는 Div 스타일
export const StyleExchangeConvertDiv = styled.div`
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

// 환전 버튼 스타일
export const StyleExchangeCompleteBtn = styled.button`
  border: none;
  border-radius: 12px;
  background-color: #5D28F2;
  color: white;
  width: 100%;
  height: 7vh;
  margin: 1.5rem 0;
  line-height: 7vh;
`

// 가장 최근 환전 내역 스타일
export const StyleExchangeRecentHistoryDiv = styled.div`
  width: 37vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.primary};
  border-radius: 12px; 
  font-size: 0.8rem;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5px;

  & > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 900;
    img:nth-of-type(1) {
      margin-right: 0.2rem;
    }
    img:nth-of-type(2) {
      margin-right: 1rem;
      margin-left: 1rem;
    }
    img:nth-of-type(3) {
      margin-right: 0.2rem;
    }
  }
`

// 환전 갱신창 스타일
export const StyleRefetchAlert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  border-radius: 12px;
  background-color: rgba(53, 85, 227, 0.12);
  padding-left: 20px;
  padding-right: 20px;
  color: rgba(55, 86, 228, 1);

  & > div > span {
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
  }
`;