import Form from "./components/Form";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import ProductsList from "./components/ProductsList";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Routes>
          <Route index element={<ProductsList/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/product" element={<ProductInfo/>}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
