/* eslint-disable react-hooks/exhaustive-deps */
import DropDownMenu from "./DropDownMenu";
import { StyleExchangeFromDiv } from "./style/ExchangeStyle";
import { ExchangeFromToProps } from "./type/ExchangeType";
import { useEffect, useState } from 'react';
import convertCoin from "../../utils/coinConverter";

const ExchangeFromTo = ({
  title,
  value,
  toCoin,
  fromCoin,
  setToCoin,
  setFromCoin,
  fromValue,
  setFromValue,
  setError
}: ExchangeFromToProps) => {
  const [convertValue, setConvertValue] = useState<any>('');
  // 입력 받기
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e?.target?.value;
    if (/^\d{0,9}(\.\d*)?$/.test(inputValue)) {
      setError('')
      if (value === "from") {
        setFromValue(inputValue);
      }
    } 
    
    if (inputValue === '') {
      setError('')
      if (value === "from") {
        setFromValue('');
      }
    } else {
      setError('숫자와 .만 입력 가능합니다.')
    }
  };
  
  useEffect(() => {
    setConvertValue(convertCoin(fromCoin, toCoin, fromValue))
  }, [fromValue, convertValue, toCoin])

  useEffect(() => {
    setFromValue('')
    setConvertValue('')
  }, [fromCoin, toCoin])

  return (
    <StyleExchangeFromDiv fromValue={fromValue}>
      <div>
        <span>{title}</span>
        <input
          type="text"
          value={value === "from" ? fromValue : convertValue}
          readOnly={value === "from" ? false : true}
          onChange={handleValue}
        />
      </div>
      <div>
        <DropDownMenu
          text={value}
          setToCoin={setToCoin}
          setFromCoin={setFromCoin}
        />
      </div>
    </StyleExchangeFromDiv>
  );
};

export default ExchangeFromTo;
