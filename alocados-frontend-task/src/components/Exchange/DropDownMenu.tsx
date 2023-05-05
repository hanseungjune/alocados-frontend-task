import { useState, useEffect } from "react";
import SolImg from "../../assets/solana.svg";
import EthImg from "../../assets/eth.svg";
import BnbImg from "../../assets/bnb.svg";
import dropImg from "../../assets/dropdown.svg";
import { MenuItemButton, MenuItemsList, SelectedItemButton } from "./style/DropDownStyle";
import { DropDownMenuProps } from "./type/ExchangeType";

const DropDownMenu = ({text, toCoin, fromCoin, setToCoin, setFromCoin}:DropDownMenuProps) => {
  // 라벨만 뽑아오기
  const [selected, setSelected] = useState<string>("Solana");
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const items = [
    { label: "Solana", image: SolImg, unit: 'SOL' },
    { label: "Ethereum", image: EthImg, unit: 'ETH' },
    { label: "BnB", image: BnbImg, unit: 'BNB' },
  ];

  const handleDropDown = () => {
    setIsDrop(!isDrop);
  };

  const handleSelect = (label: string, unit: string, text:string) => {
    setIsDrop(false);
    setSelected(label);
    
    if (text === 'from') {
      setFromCoin(unit)
    } 
    // (text === 'to')
    else {
      setToCoin(unit)
    }
  };

  return (
    <>
      <SelectedItemButton>
        <div>
          <img
            src={items.find((item) => item.label === selected)?.image}
            alt={selected}
          />
          <span>{selected}</span>
        </div>
        <img src={dropImg} alt="dropImg" onClick={handleDropDown} />
      </SelectedItemButton>
      {isDrop ? (
        <MenuItemsList isDrop={isDrop}>
          {items.map((item) => (
            <li key={item.label}>
              <MenuItemButton 
                className={item.label === selected ? 'selected' : ''}
                onClick={() => handleSelect(item.label, item.unit, text)}
              >
                <img src={item.image} alt={item.label} />
                {item.label}
              </MenuItemButton>
            </li>
          ))}
        </MenuItemsList>
      ) : null}
    </>
  );
};

export default DropDownMenu;
