// import React from "react";

import { useTelegram } from "../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram()
  return (
    <header className="header">
      <div className="header-inner">
        <input type="text" />
        <button onClick={onClose}>Закрыть</button>
        <div className="username">
            {user}
        </div>
      </div>
    </header>
  );
};

export default Header;
