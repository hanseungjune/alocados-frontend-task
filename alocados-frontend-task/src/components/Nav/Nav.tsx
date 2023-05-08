import { Link, Outlet, useLocation } from "react-router-dom";
import AlocadosImg from "../../assets/alocados.svg";
import { StyleNav, StyleSelectDetail, StyleSelectExchange } from "./style/NavStyle";

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
