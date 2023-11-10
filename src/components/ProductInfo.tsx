import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { productSlice } from "../store/reducers/ProductsSlice";

const ProductInfo = () => {
  const { setSelectedProduct  } = productSlice.actions;
  const dispatch = useAppDispatch();


  const { selectedProduct } = useAppSelector((state) => state.productReducer);



  React.useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("selectedProduct") || "null");
    if (storedProduct) {
      dispatch(setSelectedProduct(storedProduct));
    }
  }, [dispatch]);

  return (
    <div className="product-info">
      <div className="card">
        <div className="card__img">
          <img src="/images/no-image.jpg" alt="image" />
        </div>
        <div className="card__title">
          {selectedProduct.brand} {selectedProduct.model}
        </div>
        <div className="card__body">
          <span>{selectedProduct.description}</span>
          <span>
            Стоимость: <b>{selectedProduct.price}</b>
          </span>
        </div>
        <div className="card__actions">
          <button className="add-btn">Перейти к бронированию</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
