import s from "./Gallery.module.css";
import gal1 from "../../../img/gallery/1.jpg";
import gal2 from "../../../img/gallery/2.png";
import gal3 from "../../../img/gallery/3.png";
import gal4 from "../../../img/gallery/4.png";
import gal5 from "../../../img/gallery/5.jpg";
import gal6 from "../../../img/gallery/6.png";
import React from "react";


const Gallery = (props) => {
    return <div className={s.gallery__menu}>
        <div className={s.gallery__item}>
            <div className={s.gallery__image}>
                <a href="#">
                    <img src={gal1} alt=""/>
                    <div className={s.gallery__title}>
                        <div className={s.gallery__text}>
                            Холодильники
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className={s.gallery__item}>
            <div className={s.gallery__image}>
                <a href="#">
                    <img src={gal2} alt=""/>
                    <div className={s.gallery__title}>
                        <div className={s.gallery__text}>
                            Товары для дома
                        </div>
                    </div>
                </a>
            </div>

        </div>
        <div className={s.gallery__item}>
            <div className={s.gallery__image}>
                <a href="#">
                    <img src={gal3} alt=""/>
                    <div className={s.gallery__title}>
                        <div className={s.gallery__text}>
                            Приготовление кофе
                        </div>
                    </div>
                </a>
            </div>

        </div>
        <div className={s.gallery__item}>
            <div className={s.gallery__image}>
                <a href="#">
                    <img src={gal4} alt=""/>
                    <div className={s.gallery__title}>
                        <div className={s.gallery__text}>
                            Стиральные машины
                        </div>
                    </div>
                </a>
            </div>

        </div>
        <div className={s.gallery__item}>
            <div className={s.gallery__image}>
                <a href="#">
                    <img src={gal5} alt=""/>
                    <div className={s.gallery__title}>
                        <div className={s.gallery__text}>
                            Товары для кухни
                        </div>
                    </div>
                </a>
            </div>

        </div>
        <div className={s.gallery__item}>
            <div className={s.gallery__image}>
                <a href="#">
                    <img src={gal6} alt=""/>
                    <div className={s.gallery__title}>
                        <div className={s.gallery__text}>
                            Телевизоры
                        </div>
                    </div>
                </a>
            </div>

        </div>
    </div>
}

export default Gallery