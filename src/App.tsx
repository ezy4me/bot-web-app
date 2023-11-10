import Form from "./components/Form";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route index element={<ProductsList/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
