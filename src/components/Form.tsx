import React from "react";
import Input from "../UI/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [patronymic, setPatronymic] = React.useState("");

  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const onChangeName = (newValue: string) => {
    setName(newValue);
  };

  const onChangeSurname = (newValue: string) => {
    setSurname(newValue);
  };

  const onChangePatronymic = (newValue: string) => {
    setPatronymic(newValue);
  };
  return (
    <div className="form">
      <h3>Введите данные для аренды</h3>
      <div className="form__dates">
        <DatePicker
          placeholderText="Дата получения"
          dateFormat="dd / MM / yyyy"
          selected={startDate}
          minDate={new Date()}
          onChange={(date: any) => setStartDate(date)}
        />
        <DatePicker
          placeholderText="Дата сдачи"
          dateFormat="dd / MM / yyyy"
          selected={endDate}
          minDate={new Date()}
          onChange={(date: any) => setEndDate(date)}
        />
      </div>

      <Input placeHolder="Имя" value={name} onChange={onChangeName} />
      <Input placeHolder="Фамилия" value={surname} onChange={onChangeSurname} />
      <Input
        placeHolder="Отчество"
        value={patronymic}
        onChange={onChangePatronymic}
      />
    </div>
  );
};

export default Form;
