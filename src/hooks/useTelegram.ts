const tg = (window as any).Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user?.username || "username"
  };
}
