import React, { FC } from 'react'
import style from '../CustomerRequests.module.scss'

interface IInputProps {
  typeOfField: string;
  fieldName: string;
  fieldPlaceholder: string;
}

const InputItem: FC<IInputProps> = ({ typeOfField, fieldName, fieldPlaceholder }) => {
  return (
    <div className={style.item}>
      <label className={style.itemLabel}>{fieldName}</label>
      <div className={style.itemField}><input type={typeOfField} placeholder={fieldPlaceholder} /></div>
    </div>
  );
}

export default InputItem;