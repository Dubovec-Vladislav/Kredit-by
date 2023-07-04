import React, { FC, useEffect, useState } from 'react'
import style from './CustomerRequests.module.scss'
import Button from '../General/Button/Button'
import { Link, NavLink } from 'react-router-dom'
import InputItem from './FormComponents/Input'
import TextAreaItem from './FormComponents/TextArea'
import Select from './FormComponents/Select'
import Checkbox from './FormComponents/Checkbox'


// --------------------------------------------- //
//           # Customer requests form            //
// --------------------------------------------- //

interface ICustomerRequestsProps {
  id: number;
}

const CustomerRequests: FC<ICustomerRequestsProps> = ({ id }) => {
  const [isPopActive, setPopActive] = useState(false)

  const handleButtonClick = () => {
    setPopActive(!isPopActive);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let fields = <></>;

  switch (id) {
    case 1:
      fields = <>
        <InputItem typeOfField={"text"} fieldName={"Наименование организации"} fieldPlaceholder={"Марко"} />
        <InputItem typeOfField={"number"} fieldName={"УНП"} fieldPlaceholder={"MPXXXXXXX"} />
        <InputItem typeOfField={"text"} fieldName={"Адрес Регистрации"} fieldPlaceholder={"ул.Рязко 14, г.Литейный"} />
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
        <InputItem typeOfField={"text"} fieldName={"Ссылка на сайт (при наличии)"} fieldPlaceholder={"https://example.com"} />
        <InputItem typeOfField={"email"} fieldName={"Почта"} fieldPlaceholder={"example@gmail.com"} />
        <Select fieldName={"Для каких целей вам нужен кредит"} fieldPlaceholder={"Список экономических показателей"} />
        <TextAreaItem fieldName={"Краткая характеристика"} fieldPlaceholder={"Краткая характеристика вашей компании (фирмы)"} />
        <TextAreaItem fieldName={"Показатели"} fieldPlaceholder={"Список экономических показателей"} />
        <Checkbox id={1} fieldName={"Беларусь Банк"} />
        <Checkbox id={2} fieldName={"Сбер Банк"} />
        <Checkbox id={3} fieldName={"Альфа Банк"} />
        <Checkbox id={4} fieldName={"Белагропром Банк"} />
        <Checkbox id={5} fieldName={"Банк Решение"} />
        <Checkbox id={6} fieldName={"ВТБ Банк"} />
      </>
      break;
    case 2:
      fields = <>
        <InputItem typeOfField={"text"} fieldName={"Фамилия"} fieldPlaceholder={"Куликов"} />
        <InputItem typeOfField={"text"} fieldName={"Имя"} fieldPlaceholder={"Владимир"} />
        <InputItem typeOfField={"text"} fieldName={"Отчество"} fieldPlaceholder={"Николаевич"} />
        <InputItem typeOfField={"number"} fieldName={"УНП"} fieldPlaceholder={"MPXXXXXXX"} />
        <InputItem typeOfField={"text"} fieldName={"Адрес Регистрации"} fieldPlaceholder={"ул.Рязко 14, г.Литейный"} />
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
        <InputItem typeOfField={"text"} fieldName={"Ссылка на сайт (при наличии)"} fieldPlaceholder={"https://example.com"} />
        <InputItem typeOfField={"email"} fieldName={"Почта"} fieldPlaceholder={"example@gmail.com"} />
        <Select fieldName={"Для каких целей вам нужен кредит"} fieldPlaceholder={"Список экономических показателей"} />
        <TextAreaItem fieldName={"Краткая характеристика"} fieldPlaceholder={"Краткая характеристика вашей компании (фирмы)"} />
        <TextAreaItem fieldName={"Показатели"} fieldPlaceholder={"Список экономических показателей"} />
        <Checkbox id={1} fieldName={"Беларусь Банк"} />
        <Checkbox id={2} fieldName={"Сбер Банк"} />
        <Checkbox id={3} fieldName={"Альфа Банк"} />
        <Checkbox id={4} fieldName={"Белагропром Банк"} />
        <Checkbox id={5} fieldName={"Банк Решение"} />
        <Checkbox id={6} fieldName={"ВТБ Банк"} />
      </>
      break;
    case 3:
      fields = <>
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
      </>
      break;
    case 4:
      fields = <>
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
      </>
      break;
    default:
      fields = <>Упс, что-то пошло не так.</>
      break;
  }

  return (
    <div className={`${style.block} ${isPopActive ? style.activeBlock : ""}`}>
      <div className={`${style.popup} ${isPopActive ? style.activePopup : ""}`}>
        Ваша заявка принята
        <NavLink to={"/"}>
          <div className={style.popupClose}>x</div>
        </NavLink>
      </div>
      <div className={style.body}>
        <div className={style.form}>
          <div className={style.formTitle}>Оставить заявку</div>
          {fields}
          <button className={style.btn} onClick={handleButtonClick}><Button text={"Отправить"} /></button>
        </div>
      </div>
      <Link className={style.home} to="/"><img src="/img/arrow-left.svg" alt="arrow-left" /> На главную</Link>
    </div>
  );
};

// --------------------------------------------- //
//           End Customer requests form          //
// --------------------------------------------- //


export default CustomerRequests;