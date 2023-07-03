import React, { FC, MouseEvent } from 'react'
import style from './Header.module.scss'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'


// --------------------------------------------- //
//                 # Header link                 //
// --------------------------------------------- //

interface IMyLinkProps {
  name: string;
  to?: string;
  thisPageLink?: boolean;
  popup?: boolean;
  handlePopupClick?: (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => void;
}

const MyLink: FC<IMyLinkProps> = ({ name, to, thisPageLink, popup, handlePopupClick  }) => {
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


export default MyLink;