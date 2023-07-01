import React, { FC } from 'react'
import style from './Button.module.scss'

interface IButtonProps {
  text: string;
}

const Button: FC<IButtonProps> = ({ text }) => {
  return (
    <div className={style.btn}>{text}</div>
  );
};

export default Button;