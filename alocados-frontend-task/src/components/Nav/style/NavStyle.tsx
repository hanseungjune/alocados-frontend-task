import styled from "styled-components";

// 색깔 변수 지정
export const color = {
  primary: '#fafbfc'
}

// Nav 스타일
export const StyleNav = styled.nav`
  width: calc(100vw - 6rem);
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #adadad;
  margin-bottom: 3vh;
`;

// 환전하기로 이동한 경우 버튼 스타일
export const StyleSelectExchange = styled.div`
  & > a {
    padding: 1rem;
    margin: 0 0.5rem;
    text-decoration: none;
    border-radius: 12px;
  }

  & > a:nth-of-type(1) {
    background-color: rgba(93, 40, 242, 0.24);
    color: #5D28F2;
    padding: 1rem;
  }
`

// 거래내역으로 이동한 경우 버튼 스타일
export const StyleSelectDetail = styled.div`
  & > a {
    padding: 1rem;
    margin: 0 0.5rem;
    text-decoration: none;
    border-radius: 12px;
  }

  & > a:nth-of-type(2) {
    background-color: rgba(93, 40, 242, 0.24);
    color: #5D28F2;
    padding: 1rem;
  }
`