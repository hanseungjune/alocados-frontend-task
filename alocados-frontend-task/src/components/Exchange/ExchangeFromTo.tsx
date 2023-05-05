import DropDownMenu from "./DropDownMenu";
import { StyleExchangeFromDiv } from "./style/ExchangeStyle";
import { ExchangeFromToProps } from "./type/ExchangeType";

const ExchangeFromTo = ({
  title,
  value,
  toCoin,
  fromCoin,
  setToCoin,
  setFromCoin,
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  error,
  setError
}: ExchangeFromToProps) => {
  // 입력 받기
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e?.target?.value;
    if (/[.0-9]/gm.test(inputValue)) {
      setError('')
      if (value === "from") {
        setFromValue(parseFloat(inputValue));
      }
      // (value === 'to')
      else {
        setToValue(parseFloat(inputValue));
      }
    } else if (inputValue === '') {
      setError('')
      if (value === "from") {
        setFromValue(inputValue);
      }
      // (value === 'to')
      else {
        setToValue(inputValue);
      }
    } else {
      setError('숫자와 .만 입력 가능합니다.')
    }
  };

  return (
    <StyleExchangeFromDiv>
      <div>
        <span>{title}</span>
        <input
          type="text"
          value={value === "from" ? fromValue : toValue}
          onChange={handleValue}
        />
      </div>
      <div>
        <DropDownMenu
          text={value}
          toCoin={toCoin}
          fromCoin={fromCoin}
          setToCoin={setToCoin}
          setFromCoin={setFromCoin}
        />
      </div>
    </StyleExchangeFromDiv>
  );
};

export default ExchangeFromTo;
