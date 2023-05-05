import { StyleRefetchAlert } from "../../routes/Exchange"
import { FaInfoCircle } from "react-icons/fa";

export interface ExchangeAlertProps {
  handleAlert: (e:React.MouseEvent<HTMLDivElement>) => void
}

const ExchangeAlert = ({handleAlert}:ExchangeAlertProps) => {
  return (
    <StyleRefetchAlert>
      <div>
        <FaInfoCircle /> 최근 거래 후 갱신 되었습니다.
      </div>
      <div
        onClick={handleAlert}
      >
        <span>X</span>
      </div>
    </StyleRefetchAlert>
  )
}

export default ExchangeAlert