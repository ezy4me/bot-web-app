import "./App.css";
const tg = (window as any)?.Telegram.WebApp;
function App() {
  const onClose = () => {
    return 0;
  };
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}
export default App;
