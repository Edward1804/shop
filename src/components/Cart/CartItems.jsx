import React from 'react';
import s from "./Cart.module.css";

const CartItems = (props) => {
    return (
        <div className={s.cart__tables_inner}>
            <div className={s.cart__tables_item + " " + s.cart__tables_grid}>
                <div className={s.cart__tables_img}>
                    <img
                        src={props.img}
                        alt=""/></div>
                <div className={s.cart__tables_title}>{props.title}</div>
                <div className={s.cart__tables_price}>{props.price}.00 руб</div>
                <div className={s.cart__tables_count}>
                    <div className={s.cart__btn_count + " " + s.cart__btn_count_left}>
                        <button onClick={() => props.subtractCount(props.id)}>-</button>
                    </div>
                    <div className={s.cart__count}>
                        {props.count}
                    </div>
                    <div className={s.cart__btn_count + " " + s.cart__btn_count_right}>
                        <button onClick={() => props.addCount(props.id)}>+</button>
                    </div>
                </div>
                <div className={s.cart__tables_total_price + " " + s.cart__tables_price}>{props.price * props.count}.00 руб</div>
                <div className={s.cart__tables_delete}>
                    <button
                        onClick={() => props.del(props.id)}>Удалить</button></div>
            </div>
        </div>
    )
}

export default CartItems