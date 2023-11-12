import React from "react";
import Input from "../UI/Input";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BackButton from "./BackButton";

import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

import { useTelegram } from "../hooks/useTelegram";

const Form = () => {
  const { tg } = useTelegram();

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

  React.useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
      color: "#535bf2"

    });
  }, []);

  React.useEffect(() => {
    tg.MainButton.show();
  }, []);

  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick, type }: any, ref: any) => (
      <div>
        {type && <p>Дата получения</p>}
        {!type && <p>Дата сдачи</p>}
        <button className="custom-input" onClick={onClick} ref={ref}>
          {value || "Выберите дату"}
        </button>
      </div>
    )
  );

  return (
    <div className="form">
      <div className="form__header">
        <BackButton />
        <h3>Введите данные для аренды</h3>
      </div>

      <div className="form__dates">
        <DatePicker
          dateFormat="dd / MM / yyyy"
          selected={startDate}
          minDate={new Date()}
          locale={ru}
          onChange={(date: any) => setStartDate(date)}
          customInput={<ExampleCustomInput type={true}/>}
        />
        <DatePicker
          dateFormat="dd / MM / yyyy"
          selected={endDate}
          minDate={startDate ? new Date(startDate) : undefined}
          locale={ru}
          onChange={(date: any) => setEndDate(date)}
          customInput={<ExampleCustomInput type={false}/>}
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
