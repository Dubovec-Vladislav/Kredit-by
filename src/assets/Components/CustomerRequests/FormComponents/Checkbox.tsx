import React, { FC } from 'react'
import style from '../CustomerRequests.module.scss'

// interface IInputItemProps {
//   typeOfField: string;
//   fieldName: string;
//   fieldPlaceholder: string;
// }

const Checkbox: FC = () => {
  return (
    <>
      <div className={style.checkboxContainer}>
        <input type="checkbox" id="checkbox_1" />
        <label htmlFor="checkbox_1">Беларусь Банк</label>
      </div>
      <div className={style.checkboxContainer}>
        <input type="checkbox" id="checkbox_2" />
        <label htmlFor="checkbox_2">Сбер Банк</label>
      </div>
      <div className={style.checkboxContainer}>
        <input type="checkbox" id="checkbox_3" />
        <label htmlFor="checkbox_3">Альфа Банк</label>
      </div>
      <div className={style.checkboxContainer}>
        <input type="checkbox" id="checkbox_4" />
        <label htmlFor="checkbox_4">Белагропром Банк</label>
      </div>
      <div className={style.checkboxContainer}>
        <input type="checkbox" id="checkbox_5" />
        <label htmlFor="checkbox_5">Банк Решение</label>
      </div>
      <div className={style.checkboxContainer}>
        <input type="checkbox" id="checkbox_6" />
        <label htmlFor="checkbox_6">ВТБ Банк</label>
      </div>
    </>
  );
}

export default Checkbox;