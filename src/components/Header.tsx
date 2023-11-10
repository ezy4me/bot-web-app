// import React from "react";
const tg = (window as any).Telegram.WebApp;

const Header = () => {
  const onClose = () => {
    tg.close();
  };

  return (
    <header className="header">
      <div className="header-inner">
        <input type="text" />
        <button onClick={onClose}>Закрыть</button>
        <div className="username">
            {tg.initDataUnsafe?.user?.username}
        </div>
      </div>
    </header>
  );
};

export default Header;
