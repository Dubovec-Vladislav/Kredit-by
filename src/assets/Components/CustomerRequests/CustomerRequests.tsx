import React, { FC, useEffect, useState } from 'react'
import style from './CustomerRequests.module.scss'
import Button from '../General/Button/Button'
import { Link } from 'react-router-dom'

interface ICustomerRequestsProps {
  id: number;
}

const CustomerRequests: FC<ICustomerRequestsProps> = ({ id }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let fields = <></>;

  switch (id) {
    case 1:
      fields = <>
        <InputItem typeOfField={"text"} fieldName={"Имя"} fieldPlaceholder={"Vladislav"} />
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
      </>
      break;
    case 2:
      fields = <>
        <InputItem typeOfField={"text"} fieldName={"Имя"} fieldPlaceholder={"Vladislav"} />
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
      </>
      break;
    case 3:
      fields = <>
        <InputItem typeOfField={"text"} fieldName={"Имя"} fieldPlaceholder={"Vladislav"} />
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
      </>
      break;
    case 4:
      fields = <>
        <InputItem typeOfField={"text"} fieldName={"Имя"} fieldPlaceholder={"Vladislav"} />
        <InputItem typeOfField={"number"} fieldName={"Номер телефона"} fieldPlaceholder={"+375 00 000-00-00"} />
      </>
      break;
    default:
      fields = <>Упс, что-то пошло не так.</>
      break;
  }

  return (
    <div className={`${style.block} ${style.active ? active : ""}`}>
      {/* <div className={style.popup}>Popup</div> */}
      <div className={style.body}>
        <div className={style.form}>
          <div className={style.formTitle}>Оставить заявку</div>
          {fields}
          <button className={style.btn} onClick={() => setActive(true)}><Button text={"Отправить"} /></button>
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

export default CustomerRequests;