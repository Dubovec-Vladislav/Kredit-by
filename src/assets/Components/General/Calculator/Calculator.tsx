import React, { ChangeEvent, FC, useState } from 'react'
import './Calculator.scss'

const Calculator: FC = (props) => {
  const [procent, setProcent] = useState(13);
  const [cash, setCash] = useState(300);
  const OUR_PROCENT = 5;
  const totalCash = Math.round(cash + (procent / 100) * cash + (OUR_PROCENT / 100) * cash);

  const handleProcentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProcent(Number(e.target.value));
  }

  const handleCashChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCash(Number(e.target.value));
  }

  return (
    <div className="calculator__block">
      <div className="calculator__body">
        <div className="calculator__output-block">
          <div className="calculator__output">
            Итоговая сумма - {totalCash} руб.
          </div>
        </div>
        <div className="calculator__input-block">
          <div className="calculator__input">
            <input type="range" min={6} max={33} step={1} value={procent} onChange={handleProcentChange}></input>
            <span>{procent}%</span>
          </div>
          <div className="calculator__input">
            <input type="range" min={100} max={10_000} step={150} value={cash} onChange={handleCashChange}></input>
            <span>{cash} руб.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;