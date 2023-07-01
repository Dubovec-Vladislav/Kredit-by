import React, { FC } from 'react'
import style from './Advantages.module.scss'
import Line from '../../General/Line/Line'


// --------------------------------------------- //
//                 # Advantages                  //
// --------------------------------------------- //

const Advantages: FC = () => {
  return (
    <div className={style.block} id="advantages">
      <div className={style.line}><Line text={"6 причин выбрать нас"} /></div>
      <div className={style.body}>
        <div className={style.row}>
          <AdvantagesCard imgPath={"img/Advantages/card-2.svg"} imgName={"card-2"} title={"Безопасно"}
            text={"Используем сквозное шифрование и даем гарантии что ваши данные будут в безопасности "} />
          <AdvantagesCard imgPath={"img/Advantages/card-3.svg"} imgName={"card-3"} title={"Быстро"}
            text={"Несколько дней и ваш кредит будет одобрен"} />
          <AdvantagesCard imgPath={"img/Advantages/card-1.svg"} imgName={"card-1"} title={"Удобно"}
            text={"Лишь пол часа вашего времени для заполнения формы. Остальное мы сделаем за вас"} />
        </div>
        <div className={style.row}>
          <AdvantagesCard imgPath={"img/Advantages/card-4.svg"} imgName={"card-4"} title={"Доступно"}
            text={"Работаем с банками из различных отраслей как внутри страны, так и за её пределами"} />
          <AdvantagesCard imgPath={"img/Advantages/card-5.svg"} imgName={"card-5"} title={"Опыт"}
            text={"Наша команда состоит только из профессионалов в области it и экономики с многолетним опытом"} rotate={true} />
          <AdvantagesCard imgPath={"img/Advantages/card-6.svg"} imgName={"card-6"} title={"Конфиденциально"}
            text={"Данные ни под каким предлогом не передаём 3-им лицам"} />
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                 End Advantages                //
// --------------------------------------------- //


// --------------------------------------------- //
//               # Advantages card               //
// --------------------------------------------- //

interface IAdvantagesCardProps {
  imgPath: string;
  imgName: string;
  title: string;
  text: string;
  rotate?: boolean;
}

const AdvantagesCard: FC<IAdvantagesCardProps> = ({ imgPath, imgName, title, text, rotate }) => {
  return (
    <div className={`${style.column} ${rotate ? style.rotate : ""}`}>
      <div className={style.item}>
        <div className={style.img}><img src={imgPath} alt={imgName} /></div>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{text}</div>
      </div>
    </div>
  );
}

// --------------------------------------------- //
//               End Advantages card             //
// --------------------------------------------- //


export default Advantages;