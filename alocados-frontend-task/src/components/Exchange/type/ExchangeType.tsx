export interface DropDownMenuProps {
  text:string
  setToCoin:React.Dispatch<React.SetStateAction<string>>;
  setFromCoin:React.Dispatch<React.SetStateAction<string>>;
}

export interface ExchangeRecentHistoryProps {
  history: any
}

export interface ExchangeSummaryProps {
  coinImg: any;
  coinBalance: number;
}

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