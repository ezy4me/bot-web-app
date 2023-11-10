import React from "react";

import { FaFilter, FaUser, FaTimes } from "react-icons/fa";

import { useTelegram } from "../hooks/useTelegram";
import Input from "../UI/Input";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, onClose } = useTelegram();

  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <header className="header">
      <div className="header__actions">
        <div className="username">
          <FaUser />
          <p>{user}</p>
        </div>
        <Link to="/form">
          <button>Форма</button>
        </Link>
        <Link to="/">
          <button>Каталог</button>
        </Link>
        <button className="icon" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="header__inner">
        <Input label="Поиск" value={inputValue} onChange={handleInputChange} />
        <button className="icon" style={{ background: '#646cff' }}>
          <FaFilter />
        </button>
      </div>
    </header>
  );
};

export default Header;
