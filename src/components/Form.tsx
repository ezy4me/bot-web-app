import React from "react";
import Input from "../UI/Input";

const Form = () => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [patronymic, setPatronymic] = React.useState("");

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
