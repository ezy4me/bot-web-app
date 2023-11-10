const ProductItem = ({ product, onAdd }: any) => {
  const onAddHandler = () => {
    onAdd(product);
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
        <button className="add-btn" onClick={onAddHandler}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
