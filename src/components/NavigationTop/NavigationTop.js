import React from 'react';
import s from './NavigationTop.module.css';
import mainS from '../../App.module.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const NavigationTop = (props) => {
    return (
        <div className={s.headerNav}>
            <div className={mainS.container}>
                <div className={s.nav__inner}>
                    <Link to='/collections'>
                        <div className={s.catalog}>
                            <span>Каталог</span>
                            <FontAwesomeIcon className={s.img} icon="folder-open"/>
                        </div>
                    </Link>
                    <ul className={s.menu}>
                        <li className={s.menu__item}>Оплата</li>
                        <li className={s.menu__item}>Доставка</li>
                        <li className={s.menu__item}>Контакты</li>
                        <li className={s.menu__item}>Пункт 1</li>
                        <li className={s.menu__item}>Пункт 2</li>
                        <li className={s.menu__item}>Пункт под меню 1</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}