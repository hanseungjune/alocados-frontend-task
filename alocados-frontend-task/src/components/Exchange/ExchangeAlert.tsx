import { FaInfoCircle } from "react-icons/fa";
import { StyleRefetchAlert } from "./style/ExchangeStyle";
import { ExchangeAlertProps } from "./type/ExchangeType";

const ExchangeAlert = ({ handleAlert }: ExchangeAlertProps) => {
  return (
    <StyleRefetchAlert>
      {/* 갱신되면 경고창 */}
      <>
        <div>
          <FaInfoCircle /> 최근 거래 후 갱신 되었습니다.
        </div>
        <div onClick={handleAlert}>
          <span>X</span>
        </div>
      </>
    </StyleRefetchAlert>
  );
};

export default ExchangeAlert;
