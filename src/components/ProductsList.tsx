import React from "react";

import ProductItem from "./ProductItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../store/reducers/ProductsSlice";

const ProductsList = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products } = useAppSelector((state) => state.productReducer);

  const onAdd = (product: any) => {
    console.log(product);
  };

  return (
    <div className="products">
      <div className="products__list">
        {products.map((item) => (
          <ProductItem key={item.id} product={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
