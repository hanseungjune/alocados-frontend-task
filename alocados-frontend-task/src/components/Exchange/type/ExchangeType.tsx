export interface DropDownMenuProps {
  text:string
  toCoin:string
  fromCoin:string
  setToCoin:React.Dispatch<React.SetStateAction<string>>;
  setFromCoin:React.Dispatch<React.SetStateAction<string>>;
}

export interface ExchangeHistoryCardsProps {
  regDt:string,
  fromImg:any,
  fromContent:number,
  toImg:any,
  toContent:number,
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
  fromValue: number | string,
  toValue: number | string,
  setFromValue: React.Dispatch<React.SetStateAction<number | string>>,
  setToValue: React.Dispatch<React.SetStateAction<number | string>>,
  error: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
}