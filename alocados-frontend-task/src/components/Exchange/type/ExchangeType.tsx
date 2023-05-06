export interface DropDownMenuProps {
  text:string
  setToCoin:React.Dispatch<React.SetStateAction<string>>;
  setFromCoin:React.Dispatch<React.SetStateAction<string>>;
}

export interface ExchangeHistoryCardsProps {
  regDt:string,
  fromImg:any,
  fromContent:string,
  toImg:any,
  toContent:string,
  timestamp?:string,
  from?:string,
  to?:string
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