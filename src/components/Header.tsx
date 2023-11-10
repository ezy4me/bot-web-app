import React from "react";

import { FaFilter } from "react-icons/fa";

import { useTelegram } from "../hooks/useTelegram";
import Input from "../UI/Input";
const Header = () => {
  const { user, onClose } = useTelegram();

  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <header className="header">
      <div className="header__actions">
        <div className="username">{user}</div>
        <button onClick={onClose}>Закрыть</button>
      </div>
      <div className="header__inner">
        <Input label="Поиск" value={inputValue} onChange={handleInputChange} />
        <button className="icon">
          <FaFilter />
        </button>
      </div>
    </header>
  );
};

export default Header;
