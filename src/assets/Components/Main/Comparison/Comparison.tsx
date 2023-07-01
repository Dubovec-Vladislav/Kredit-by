import React, { FC } from 'react'
import style from './Comparison.module.scss'
// import Button from '../../General/Button/Button'


// --------------------------------------------- //
//                   # Design                    //
// --------------------------------------------- //

const Comparison: FC = () => {
  return (
    <div className={style.block} id="comparison">
      <div className={style.body}>
        <div className={style.left}>
          {/* <div className={style.img}></div> */}
          <div className={style.title}>Стандартное получение кредита</div>
          <div className={style.text}> Может занимать несколько недель, а то и месяцев и не всегда с положительным исходом</div>
          {/* <div className={style.btn}><Button text={"Заказать за 1790₽"} /></div> */}
        </div>
        <div className={style.right}>
          {/* <div className={style.img}></div> */}
          <div className={style.title}>Получения кредита с нашей помощью</div>
          <div className={style.text}>Время получения сокращается в разы! А шансы получить отказ сводятся к минимуму</div>
          {/* <Button text={"Заказать за 4990₽"} /> */}
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                   End Design                  //
// --------------------------------------------- //


export default Comparison;