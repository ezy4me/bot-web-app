import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { productSlice } from "../store/reducers/ProductsSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


const ProductInfo = () => {
  const { setSelectedProduct } = productSlice.actions;
  const dispatch = useAppDispatch();
  const { selectedProduct } = useAppSelector((state) => state.productReducer);

  React.useEffect(() => {
    const storedProduct = JSON.parse(
      localStorage.getItem("selectedProduct") || "null"
    );
    if (storedProduct) {
      dispatch(setSelectedProduct(storedProduct));
    }
  }, [dispatch]);


  return (
    <div className="product-info">
      <div className="product-info__images">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src="/images/no-image.jpg" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/no-image.jpg" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/no-image.jpg" alt="image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Link to={"/form"}>
        <div className="product-info__actions">
          <button className="add-btn">Перейти к бронированию</button>
        </div>
      </Link>
      <div className="product-info__title">
        <p className="text">
          {selectedProduct.brand} {selectedProduct.model}
        </p>
      </div>
      <div className="product-info__desc">
        <p>{selectedProduct.description}</p>
      </div>

      <div className="product-info__title">
        <p className="text">Характеристики</p>
      </div>

      <ul className="product-info__list">
        <li className="product-info__item">
          <p className="text">Двигатель</p>
          <p className="text">Бензин</p>
        </li>
        <li className="product-info__item">
          <p className="text">Коробка передач</p>
          <p className="text">Автомат</p>
        </li>
        <li className="product-info__item">
          <p className="text">Пробег</p>
          <p className="text">19 000 км</p>
        </li>
        <li className="product-info__item">
          <p className="text">Год выпуска</p>
          <p className="text">2020</p>
        </li>
        <li className="product-info__item">
          <p className="text">Кол-во мест</p>
          <p className="text">4</p>
        </li>
        <li className="product-info__item">
          <p className="text">Тип аренды</p>
          <p className="text">Без водителя</p>
        </li>
      </ul>

      <div className="product-info__title">
        <p className="text">Цены</p>
      </div>

      <ul className="product-info__list">
        <li className="product-info__item">
          <p className="text">За сутки</p>
          <p className="text">₽25000</p>
        </li>
        <li className="product-info__item">
          <p className="text">Выходные дни (Сб и Вс)</p>
          <p className="text">₽25000</p>
        </li>
        <li className="product-info__item">
          <p className="text">Еженедельно (7д+)</p>
          <p className="text">₽25000</p>
        </li>
        <li className="product-info__item">
          <p className="text">Ежемесячно (30д+)</p>
          <p className="text">₽25000</p>
        </li>
        <li className="product-info__item">
          <p className="text">Мин. кол-во дней</p>
          <p className="text">4</p>
        </li>
        <li className="product-info__item">
          <p className="text">Макс. кол-во дней</p>
          <p className="text">Без водителя</p>
        </li>
        <li className="product-info__item">
          <p className="text">Пробег в день</p>
          <p className="text">40000</p>
        </li>
      </ul>
    </div>
  );
};

export default ProductInfo;
