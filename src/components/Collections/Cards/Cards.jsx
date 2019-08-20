import React from 'react';
import s from './Cards.module.css'
import {Link} from "react-router-dom";


const Cards = (props) => {
    const link = '/product/' + props.id
    return <Link to={link}>
        <div className={s.card__item}>
            <img src={props.img} alt=""/>
            <p>{props.productName}</p>
        </div>
    </Link>
}


export default Cards;