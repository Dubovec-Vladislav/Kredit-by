import React, { FC } from 'react'
import style from '../CustomerRequests.module.scss'

interface ISelectProps {
  fieldName: string;
  fieldPlaceholder: string;
}

const Select: FC<ISelectProps> = ({ fieldName, fieldPlaceholder }) => {
  return (
    <div className={style.item}>
      <label className={style.itemLabel}>{fieldName}</label>
      <div className={style.itemField}>
        <select id="" name="">
          <option value="" disabled selected> --- Выберите тип кредита --- </option>
          <option value="" className="select-option">Кредит на развитие бизнеса</option>
          <option value="" className="select-option">Кредит на заработную плату</option>
          <option value="" className="select-option">Целевой кредит</option>
        </select>
      </div>
    </div>
  );
};

export default Select;