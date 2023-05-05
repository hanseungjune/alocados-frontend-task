import DropDownMenu from './DropDownMenu';
import { StyleExchangeFromDiv } from './style/ExchangeStyle';
import { ExchangeFromToProps } from './type/ExchangeType';

const ExchangeFromTo = ({title, value}:ExchangeFromToProps) => {
  return (
    <StyleExchangeFromDiv>
      <div>
        <span>{title}</span>
        <input type="text" />
      </div>
      <div>
        <DropDownMenu text={value}/>
      </div>
    </StyleExchangeFromDiv>
  )
}

export default ExchangeFromTo