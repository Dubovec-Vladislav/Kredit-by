import React, { FC } from 'react'
import style from './Footer.module.scss'
import { Link } from 'react-router-dom'


// --------------------------------------------- //
//                   # Footer                    //
// --------------------------------------------- //

const Footer: FC = () => {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.column}>
            <div className={style.title}>Разделы</div>
            <FooterItem to={"#"} text={"Услуги"} />
            <FooterItem to={"#"} text={"Преимущества"} />
            <FooterItem to={"#"} text={"О нас"} />
            <FooterItem to={"#"} text={"Контакты"} />
          </div>
          <div className={style.column}>
            <div className={style.title}>Разделы</div>
            <FooterItem to={"#"} text={"Номер телефона"} />
            <FooterItem to={"#"} text={"Вконтакте"} />
            <FooterItem to={"#"} text={"Телеграм"} />
            <FooterItem to={"#"} text={"Инстаграм"} />
          </div>
        </div>
        <div className={style.footer}>
          <Link to="#" className={style.footerItem}>© 2022–2023   OOO StyleCards</Link>
          <Link to="#" className={style.footerItem}>Политика конфиденциальности</Link>
          <Link to="#" className={style.footerItem}>Публичная оферта</Link>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                   End Footer                  //
// --------------------------------------------- //



// --------------------------------------------- //
//                 # Footer Item                 //
// --------------------------------------------- //

interface IFooterItemProps {
  to: string;
  text: string;
}

const FooterItem: FC<IFooterItemProps> = ({ to, text }) => {
  return (
    <div className={style.item}>
      <Link to={to} className={style.link}>{text}</Link>
    </div>
  );
}

// --------------------------------------------- //
//                 End Footer Item               //
// --------------------------------------------- //


export default Footer;