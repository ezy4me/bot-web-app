import "./App.css";

const tg = (window as any).Telegram.WebApp;
function App() {
  const onClose = () => {
    tg.close()
  };
  return (
    <>
      <div className="app">
        <button onClick={onClose}>Закрыть</button>
      </div>
    </>
  );
}

export default App;
