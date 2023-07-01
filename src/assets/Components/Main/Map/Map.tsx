import React, { FC } from 'react'
import style from './Map.module.scss'
import Line from '../../General/Line/Line'
import Button from '../../General/Button/Button'


// --------------------------------------------- //
//                     # Map                     //
// --------------------------------------------- //

const Map: FC = () => {
  return (
    <div className={style.block} id="contacts">
      <div className={style.line}><Line text={"Где можно сделать нас найти?"} /></div>
      <div className={style.body}>
        <div className={style.content}>
          <div className={style.title}>Витебск, Московский проспект 70/1</div>
          <div className={style.text}>Поможем вам получить кредит быстро и легко</div>
          <div className={style.workingtime}>
            <p>График работы:</p>
            <p>ПН-ПТ — С 10:00 ДО 22:00</p>
            <p>СБ-ВС — С 10:00 ДО 20:00</p>
          </div>
          <div className={style.btn}><Button text={"Позвонить"} /></div>
        </div>
        <div className={style.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1278.6345934387698!2d30.233069375072656!3d55.17858605439549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c57146bcc5d2b5%3A0x711aa6a2cd9ecefb!2zMy3QuSDQui4g0JLQk9Ci0KMsINCc0L7RgdC60L7QstGB0LrQuNC5INC_0YDQvtGB0L_QtdC60YIgNzAvMSwg0JLQuNGC0LXQsdGB0LogMjEwMDM4LCDQkdC10LvQsNGA0YPRgdGM!5e0!3m2!1sru!2snl!4v1688226855768!5m2!1sru!2snl" title="map"></iframe>
        </div>
      </div>
    </div >
  );
};

// --------------------------------------------- //
//                     End Map                   //
// --------------------------------------------- //


export default Map;