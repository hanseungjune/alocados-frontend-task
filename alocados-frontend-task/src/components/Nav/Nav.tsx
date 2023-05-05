import styled from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";
import AlocadosImg from "../../assets/alocados.svg";

// 색깔
export const color = {
  primary: '#fafbfc'
}

export const StyleNav = styled.nav`
  width: calc(100vw - 6rem);
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #adadad;
  margin-bottom: 3vh;
`;

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

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <>
      <StyleNav>
        <div>
          <img src={AlocadosImg} alt="alocados" />
        </div>
        {pathname.includes("detail") ? (
          <StyleSelectDetail>
            <Link to={"/"}>환전하기</Link>
            <Link to={"/detail"}>거래내역</Link>
          </StyleSelectDetail>
        ) : (
          <StyleSelectExchange>
            <Link to={"/"}>환전하기</Link>
            <Link to={"/detail"}>거래내역</Link>
          </StyleSelectExchange>
        )}
      </StyleNav>
      <Outlet />
    </>
  );
};

export default Nav;
