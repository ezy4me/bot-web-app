const tg = (window as any).Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.show();
    } else {
      // логика взаимодействия
    }

    return {
      onClose,
      tg,
      user: tg.initDataUnsafe?.user,
    };
  };
}
