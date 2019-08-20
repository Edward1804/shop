import React from 'react';
import s from './Product.module.css';


const Product = (props) => {
    return <div className={s.product}>
        <p>{props.infoProduct.categoryRU}</p>
        <div className={s.product__main}>
            <div className={s.product__image}>
                <img src={props.infoProduct.image} alt=""/>
            </div>
            <div className={s.product__little_info}>
                <div className={s.info__title}>
                    <h1>{props.infoProduct.title}</h1>
                </div>
                <div className={s.info__describe}>
                    <p>{props.infoProduct.describe}</p>
                </div>
                <div className={s.info__describe}>
                    <p>{props.infoProduct.price}</p>
                </div>
                <button
                    onClick={() => props.addItem(props.match.params.id, props.infoProduct.title, props.infoProduct.image, props.infoProduct.price)}> Добавить в корзину
                </button>
            </div>
        </div>


    </div>
}

export default Product



