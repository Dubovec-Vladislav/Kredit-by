import React, { FC } from 'react'
import './CardSlider.scss'
import Line from '../../General/Line/Line'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import Button from '../../General/Button/Button'


// --------------------------------------------- //
//                 # Card slider                 //
// --------------------------------------------- //

const CardSlider: FC = () => {
  const breakpoints = {
    1200: {
      slidesOffsetBefore: -60,
      slidesPerView: 3.7,
      spaceBetween: 54,
    },
    1025: {
      slidesOffsetBefore: -50,
      slidesPerView: 3.1,
      spaceBetween: 44,
    },
    769: {
      slidesOffsetBefore: -40,
      slidesPerView: 2.5,
      spaceBetween: 34,
    },
    640: {
      slidesOffsetBefore: -30,
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    426: {
      slidesOffsetBefore: -20,
      slidesPerView: 2,
      spaceBetween: 14,
    },
    371: {
      slidesOffsetBefore: -10,
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    280: {
      slidesOffsetBefore: 10,
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
  };

  const swiperOptions = {
    navigation: {
      prevEl: '.card-slider__arrow-left',
      nextEl: '.card-slider__arrow-right',
    },
    pagination: {
      el: '.card-slider__pagination',
      clickable: true,
    },

    breakpoints: { ...breakpoints },
    modules: [Navigation, Pagination, A11y],
  };

  return (
    <div className="card-slider__block">
      <div className="card-slider__body">
        <div className="card-slider__line"><Line text={"Уникальный дизайн по вашему запросу"} /></div>
        <Swiper className="card-slider" {...swiperOptions}>
          <SwiperSlide><div className="card-slider__slide card-slider__slide-lightblack"></div></SwiperSlide>
          <SwiperSlide><div className="card-slider__slide card-slider__slide-black"></div></SwiperSlide>
          <SwiperSlide><div className="card-slider__slide card-slider__slide-grey"></div></SwiperSlide>
          <SwiperSlide><div className="card-slider__slide card-slider__slide-lightgrey"></div></SwiperSlide>
          <SwiperSlide><div className="card-slider__slide card-slider__slide-lightblack"></div></SwiperSlide>
          <SwiperSlide><div className="card-slider__slide card-slider__slide-black"></div></SwiperSlide>
          <SwiperSlide><div className="card-slider__slide card-slider__slide-grey"></div></SwiperSlide>
          <SwiperSlide><div className="card-slider__slide card-slider__slide-lightgrey"></div></SwiperSlide>
        </Swiper>
        <div className="card-slider__navigation">
          <div className="card-slider__navigation-body">
            <div className="card-slider__arrow-left"><img src="/img/arrow-left.svg" alt="arrow-left" /></div>
            <div className="card-slider__pagination"></div>
            <div className="card-slider__arrow-right"><img src="/img/arrow-right.svg" alt="arrow-right" /></div>
          </div>
        </div>
        <div className="card-slider__content">
          <div className="card-slider__content-body">
            <div className="card-slider__title">Карты для эффектных платежей</div>
            <div className="card-slider__text">Ультратонкий металл сохраняет все стандарты банковской карты: размер, толщину, вес. Попробуйте!</div>
            <div className="card-slider__btn"><Button text={"Заказать индивидуальный дизайн"} /></div>
          </div>
        </div>
      </div>
    </div >
  );
};

// --------------------------------------------- //
//                 End Card slider               //
// --------------------------------------------- //


export default CardSlider;