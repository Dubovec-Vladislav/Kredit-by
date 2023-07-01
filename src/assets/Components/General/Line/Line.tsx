import React, { FC } from 'react'
import style from './Line.module.scss'

interface ILineProps {
  text: string;
}

const Line: FC<ILineProps> = ({ text }) => {
  return (
    <div className={style.line}>{text}</div>
  );
};

export default Line;