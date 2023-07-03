import React, { FC } from 'react'
import style from '../CustomerRequests.module.scss'

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

export default TextAreaItem;