import React, { FC } from 'react'
import style from './Clients.module.scss'
import Line from '../../General/Line/Line'
import { NavLink } from 'react-router-dom'


// --------------------------------------------- //
//                   # Clients                   //
// --------------------------------------------- //

const Clients: FC = () => {
  return (
    <div className={style.block} id="request">
      <div className={style.line}><Line text={"Выберите свой вариант и заполните форму"} /></div>
      <div className={style.body}>
        <div className={style.row}>
          <ClientsCard text={"Юридические лица"} to={"legal-entities"} />
          <ClientsCard text={"Индивидуальные предприниматели"} to={"individual-entrepreneurs"} />
          <ClientsCard text={"Коммерческие банки"} to={"commercial-banks"} />
          <ClientsCard text={"В разработке"} to={""} />
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                   End Clients                 //
// --------------------------------------------- //


// --------------------------------------------- //
//                # Clients card                 //
// --------------------------------------------- //

interface IClientsCardProps {
  to: string;
  text: string;
}

const ClientsCard: FC<IClientsCardProps> = ({ to, text }) => {
  return (
    <div className={style.column}>
      <div className={style.item}>
        <NavLink to={to}>
          <div className={style.title}>{text}</div>
        </NavLink>
      </div>
    </div>
  );
}

// --------------------------------------------- //
//                End Clients card               //
// --------------------------------------------- //


export default Clients;