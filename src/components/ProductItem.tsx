import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { productSlice } from "../store/reducers/ProductsSlice";

const ProductItem = ({ product }: any) => {
  const { setSelectedProduct  } = productSlice.actions;

  const dispatch = useAppDispatch();

  const onViewHandler = () => {
    dispatch(setSelectedProduct(product));
  };

  return (
    <div className="card">
      <div className="card__img">
        <img src="/images/no-image.jpg" alt="image" />
      </div>
      <div className="card__title">
        {product.brand} {product.model}
      </div>
      <div className="card__body">
        <span>{product.description}</span>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <div className="card__actions">
        <Link to={{ pathname: "/product" }}>
          <button className="add-btn" onClick={onViewHandler}>
            Просмотр
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
