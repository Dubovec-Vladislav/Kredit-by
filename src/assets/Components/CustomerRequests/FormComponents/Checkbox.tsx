import React, { FC } from 'react'
import style from '../CustomerRequests.module.scss'

interface ICheckboxProps {
  id: number;
  fieldName: string;
}

const Checkbox: FC<ICheckboxProps> = ({ id, fieldName }) => {
  const idName = `checkbox_${id}`
  return (
    <div className={style.checkboxContainer}>
      <input type="checkbox" id={idName} />
      <label htmlFor={idName}>{fieldName}</label>
    </div>
  );
}

export default Checkbox;