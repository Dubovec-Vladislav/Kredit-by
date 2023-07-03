import React, { FC, useEffect, useState } from 'react'
import style from './CustomerRequests.module.scss'
import Button from '../General/Button/Button'
import { Link, NavLink } from 'react-router-dom'

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
  // для ИП вот такое: ФИО, УНП,  адрес регистрации, телефон, сайт, почта.
  switch (id) {
    case 1:
      fields = <>
        <InputItem typeOfField={"text"} fieldName={"Фамилия"} fieldPlaceholder={"Куликов"} />
        <InputItem typeOfField={"text"} fieldName={"Имя"} fieldPlaceholder={"Владимир"} />
        <InputItem typeOfField={"text"} fieldName={"Отчество"} fieldPlaceholder={"Николаевич"} />
        <InputItem typeOfField={"number"} fieldName={"УНП"} fieldPlaceholder={"MPXXXXXXX"} />
        <InputItem typeOfField={"text"} fieldName={"Адрес Регистрации"} fieldPlaceholder={"ул.Рязко 14, г.Литейный"} />
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
        <InputItem typeOfField={"text"} fieldName={"Ссылка на сайт (при наличии)"} fieldPlaceholder={"https://example.com"} />
        <InputItem typeOfField={"email"} fieldName={"Почта"} fieldPlaceholder={"example@gmail.com"} />
        <TextAreaItem fieldName={"Краткая характеристика"} fieldPlaceholder={"Краткая характеристика вашей компании (фирмы)"} />
        <TextAreaItem fieldName={"Показатели"} fieldPlaceholder={"Список экономических показателей"} />
      </>
      break;
    case 2:
      fields = <>
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
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


interface IInputItemProps {
  typeOfField: string;
  fieldName: string;
  fieldPlaceholder: string;
}

const InputItem: FC<IInputItemProps> = ({ typeOfField, fieldName, fieldPlaceholder }) => {
  return (
    <div className={style.item}>
      <label className={style.itemLabel}>{fieldName}</label>
      <div className={style.itemField}><input type={typeOfField} placeholder={fieldPlaceholder} /></div>
    </div>
  );
}


interface ITextAreaProps {
  fieldName: string;
  fieldPlaceholder: string;
}

const TextAreaItem: FC<ITextAreaProps> = ({ fieldName, fieldPlaceholder }) => {
  return (
    <div className={style.item}>
      <label className={style.itemLabel}>{fieldName}</label>
      <div className={style.itemField}>
        <textarea className={style.textArea} placeholder={fieldPlaceholder}></textarea>
      </div>
    </div>
  );
}

export default CustomerRequests;