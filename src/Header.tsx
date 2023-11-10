import React from "react";
import Button from "./Button";
import "./Header.css";

const Header = () => {
  const tg = (window as any).Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <button onClick={onClose}>Закрыть</button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};
