import Form from "./components/Form";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import ProductsList from "./components/ProductsList";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import ScrollToTop from "./components/ScrollToTop";
import React from "react";
import { useTelegram } from "./hooks/useTelegram";
const store = setupStore();



function App() {
  const {tg} = useTelegram()
  React.useEffect(() => {
    tg.expand();
  }, []);

  React.useEffect(() => {
    tg.MainButton.setParams({
      text: "Get Me Car",
    });

    tg.MainButton.disable();
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
          <ScrollToTop />
          <Routes>
            <Route index element={<ProductsList />} />
            <Route path="/form" element={<Form />} />
            <Route path="/product" element={<ProductInfo />} />
          </Routes>
      </div>
    </Provider>
  );
}

export default App;
