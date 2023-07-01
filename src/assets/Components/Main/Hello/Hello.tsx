import React, { FC } from 'react'
import style from './Hello.module.scss'
import Button from '../../General/Button/Button'


// --------------------------------------------- //
//                    # Hello                    //
// --------------------------------------------- //

const Hello: FC = () => {
  return (
    <div className={style.block} id="hello">
      <div className={style.body}>
        <div className={style.textSide}>
          <div className={style.title}>Компания Kredit.by</div>
          <div className={style.text}>
            Индивидуальные решения для кредитной документации: получите кредит онлайн с легкостью и надежностью
          </div>
          <Button text={"Создать дизайн"} />
        </div>
        <div className={style.imgSide}>
          <img src="/img/leo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                    End Hello                  //
// --------------------------------------------- //


export default Hello;