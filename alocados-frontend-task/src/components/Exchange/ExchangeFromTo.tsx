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
  // 환전 금액 받기
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
  
  // 타 코인 환전 가능 금액 자동 계산
  useEffect(() => {
    setConvertValue(convertCoin(fromCoin, toCoin, fromValue))
  }, [fromValue, convertValue, toCoin])

  // 환전시 금액 초기화
  useEffect(() => {
    setFromValue('')
    setConvertValue('')
  }, [fromCoin, toCoin])

  return (
    <StyleExchangeFromDiv fromValue={fromValue}>
      {/* 금액 입력창 */}
      <div>
        <span>{title}</span>
        <input
          type="text"
          value={value === "from" ? fromValue : convertValue}
          readOnly={value === "from" ? false : true}
          onChange={handleValue}
        />
      </div>
      {/* 드롭다운 컴포넌트 */}
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
