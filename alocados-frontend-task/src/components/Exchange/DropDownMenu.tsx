import { useState } from "react";
import SolImg from "../../assets/solana.svg";
import EthImg from "../../assets/eth.svg";
import BnbImg from "../../assets/bnb.svg";
import dropImg from "../../assets/dropdown.svg";
import { MenuItemButton, MenuItemsList, SelectedItemButton } from "./style/DropDownStyle";
import { DropDownMenuProps } from "./type/ExchangeType";

const DropDownMenu = ({text}:DropDownMenuProps) => {
  const [selected, setSelected] = useState<string>("Solana");
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const items = [
    { label: "Solana", image: SolImg },
    { label: "Ethereum", image: EthImg },
    { label: "BnB", image: BnbImg },
  ];

  const handleDropDown = () => {
    setIsDrop(!isDrop);
  };

  const handleSelect = (label: string) => {
    setIsDrop(false);
    setSelected(label);
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
                onClick={() => handleSelect(item.label)}
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
