import React from 'react';
import s from './Navigation.module.css';
import {Link} from "react-router-dom";

export const NavigationLeft = (props) => {
    return (
        <div className={s.nav}>
            <ul className={s.nav__inner}>
                <li className={s.nav__item}>
                    <Link to='/collections/appliences'>
                        Бытовая техника
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/household_products'>
                        Товары для дома
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/electronic'>
                        Электропитание
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/TV'>
                        Телевизоры
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/satellite-and-cable-TV'>
                        Спутниковое и кабельное ТВ
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/TV-antennas'>
                        ТВ-Антенны
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/Washing-machines'>
                        Стиральные машины
                    </Link>
                </li>
            </ul>
        </div>
    )
}