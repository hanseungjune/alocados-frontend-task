// 드롭다운 컴포넌트 Props 타입
export interface DropDownMenuProps {
  text:string
  setToCoin:React.Dispatch<React.SetStateAction<string>>;
  setFromCoin:React.Dispatch<React.SetStateAction<string>>;
}

// 환전 이력 가장 최근 컴포넌트 Props 타입
export interface ExchangeRecentHistoryProps {
  history: HistoryType
}

// 현재 각 코인 잔액 컴포넌트 Props 타입
export interface ExchangeSummaryProps {
  coinImg: string;
  coinBalance: number;
}

// 드롭다운 포함 환전 금액 입력 창 컴포넌트 Props 타입
export interface ExchangeFromToProps {
  title: string,
  value: string,
  toCoin: string,
  fromCoin: string,
  setToCoin: React.Dispatch<React.SetStateAction<string>>,
  setFromCoin: React.Dispatch<React.SetStateAction<string>>,
  fromValue: number | undefined,
  setFromValue: React.Dispatch<React.SetStateAction<number | string | undefined>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
}

// 경고창 컴포넌트 Props 타입
export interface ExchangeAlertProps {
  handleAlert: (e: React.MouseEvent<HTMLDivElement>) => void;
}

// 환전 섹션 컴포넌트 Props 타입
export interface ExchangeRightContainerProps {
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

// historyArray 배열 타입
export interface HistoryType {
  regDt: string,
  from: string,
  to: string,
  fromVal: string,
  toVal: string,
  fromImage: string,
  toImage: string,
  timestamp: string,
}