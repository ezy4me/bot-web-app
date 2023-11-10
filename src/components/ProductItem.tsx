const ProductItem = ({ product, onAdd }: any) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className="card">
      <div className="card__img">
        <img src="/images/no-image.jpg" alt="image" />
      </div>
      <div className="card__title">{product.title}</div>
      <div className="card__body">{product.description}</div>
      <div className="card__actions">
        <span>
          Стоимость: <b>product.price</b>
        </span>
      </div>
      <button className="add-btn" onClick={onAddHandler}>
        Добавить
      </button>
    </div>
  );
};

export default ProductItem;
