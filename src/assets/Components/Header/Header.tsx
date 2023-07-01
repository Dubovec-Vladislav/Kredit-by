import React, { useState, FC, MouseEvent } from 'react'
import style from './Header.module.scss'
import BurgerMenu from './BurgerMenu'
import { Link } from "react-scroll"
import { NavLink } from 'react-router-dom'


// --------------------------------------------- //
//                   # Header                    //
// --------------------------------------------- //

interface IHeaderProps {
  handlePopupClick?: (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => void;
}

const Header: FC<IHeaderProps> = ({ handlePopupClick }) => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    setBurgerActive(!isBurgerActive);
    document.body.classList.toggle('_lock');
  };

  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.logo}><NavLink to="/">Kredit.by</NavLink></div>
        <nav className={`${style.menu} ${isBurgerActive ? style.activeMenu : ""}`}>
          <ul className={style.list}>
            <MyLink name={"Сравнение"} to={"comparison"} thisPageLink={true}></MyLink>
            <MyLink name={"Преимущества"} to={"advantages"} thisPageLink={true} />
            <MyLink name={"Заявка"} to={"request"} thisPageLink={true}  />
            <MyLink name={"Контакты"} to={"contacts"} thisPageLink={true} />
            <MyLink
              name={"Заказать звонок"}
              thisPageLink={true}
              popup={true}
              handlePopupClick={handlePopupClick}
            />
          </ul>
        </nav>
        <BurgerMenu isBurgerActive={isBurgerActive} handleBurgerClick={handleBurgerClick} />
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                   End Header                  //
// --------------------------------------------- //



// --------------------------------------------- //
//                 # Header link                 //
// --------------------------------------------- //

interface IMyLinkProps extends IHeaderProps {
  name: string;
  to?: string;
  thisPageLink?: boolean;
  popup?: boolean;
}

const MyLink: FC<IMyLinkProps> = ({ name, to, thisPageLink, popup, handlePopupClick }) => {
  return (
    <>
      {thisPageLink ?
        popup ?
          <li className={style.item}>
            <Link className={style.link}
              to={"hello"}
              spy={true}
              smooth={true}
              offset={-140}
              duration={500}
              onClick={handlePopupClick}
            >
              {name}
            </Link>
          </li>
          :
          <li className={style.item}>
            <Link
              className={style.link}
              to={to || ""}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {name}
            </Link>
          </li>
        :
        <li className={style.item}>
          <NavLink className={style.link} to={to || ""}>{name}</NavLink>
        </li>
      }
    </>
  );
};

// --------------------------------------------- //
//                 End Header Link               //
// --------------------------------------------- //


export default Header;