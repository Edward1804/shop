import React from 'react';
import s from './Garant.module.css'



const Garant = (props) => {
    return <div className={s.garants}>
        <div className={s.garant__item}>
            <img src={props.icon1} alt=""/>
            <div className={s.garant__describe}>
                <div className={s.garant__title}>Всё меняется!</div>
                <div className={s.garant__text}>Заменим старую технику на новую</div>
            </div>
        </div>
        <div className={s.garant__item}>
            <img src={props.icon2} alt=""/>
            <div className={s.garant__describe}>
                <div className={s.garant__title}>Быстрый ремонт</div>
                <div className={s.garant__text}>Сегодня сдали — сегодня получили</div>
            </div>
        </div>
        <div className={s.garant__item}>
            <img src={props.icon3} alt=""/>
            <div className={s.garant__describe}>
                <div className={s.garant__title}>Лучшие детали</div>
                <div className={s.garant__text}>Только оригинал — нет подделок</div>
            </div>
        </div>
        <div className={s.garant__item}>
            <img src={props.icon4} alt=""/>
            <div className={s.garant__describe}>
                <div className={s.garant__title}>Доставка 24х7</div>
                <div className={s.garant__text}>В любой день и время суток!</div>
            </div>
        </div>
    </div>
};

export default Garant;