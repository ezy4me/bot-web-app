import React from "react";

import { FaAlignRight, FaAlignLeft, FaUser, FaTimes } from "react-icons/fa";

import { useTelegram } from "../hooks/useTelegram";
import Input from "../UI/Input";
import { Link } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
const Header = () => {
  const { user, onClose } = useTelegram();
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

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
        <button className="icon" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="header__nav">
        <Link to="/">
          <button>Каталог</button>
        </Link>
      </div>
      <div className="header__inner">
        <Input label="Поиск" value={inputValue} onChange={handleInputChange} />
        <button
          className="icon"
          style={{ background: "#646cff" }}
          onClick={() => setDropdownOpen(!isDropdownOpen)}>
          {!isDropdownOpen && <FaAlignRight />}
          {isDropdownOpen && <FaAlignLeft />}
        </button>
        {isDropdownOpen && <HeaderDropdown isDropdownOpen={isDropdownOpen} />}
      </div>
    </header>
  );
};

export default Header;
