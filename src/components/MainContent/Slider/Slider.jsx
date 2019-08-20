import React from 'react';
import s from './Slider.module.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';





const Slider = (props) => {
    return (
    <AwesomeSlider bullets={false}>
        <div className={s.slider__inner} data-src={props.img}>
            <div className={s.slider__inner_title}>
                Бытовая техника для дома
            </div>
            <div className={s.slider__inner_text}>
                Самая крутая бытовая техника и не только в нашем супер-классном интернет-магазине!
            </div>
            <div className={s.slider__inner_btn}>
                Хочу скупить всё!
            </div>
        </div>
        <div className={s.slider__inner} data-src={props.img2}>
            <div className={s.slider__inner_title}>
                Товары для дома
            </div>
            <div className={s.slider__inner_text}>
                Только здесь и сейчас всё по самым низким ценам!
            </div>
            <div className={s.slider__inner_btn}>
                Хочу скупить всё!
            </div>
        </div>
        <div className={s.slider__inner} data-src={props.img3}>
            <div className={s.slider__inner_title}>
                Встраиваемая техника
            </div>
            <div className={s.slider__inner_text}>
                Бытовая кухонная техника по лучшей цене
            </div>
            <div className={s.slider__inner_btn}>
                Хочу скупить всё!
            </div>
        </div>
    </AwesomeSlider>
    )
};

export default Slider;