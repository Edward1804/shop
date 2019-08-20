import React, {Component} from 'react';
import s from './Cart.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import CartItems from "./CartItems";
import {addCount, addItem, delItem, subtractCount} from "../../redux/cartReducer";


class Cart extends Component {


    render() {
        let itemsElements;
        if (this.props.amount) {
            itemsElements = this.props.items.map((item, index) => <CartItems title={item.title}
                                                                             idItems={item.idItems}
                                                                             id={index}
                                                                             price={item.price}
                                                                             count={item.count}
                                                                             addCount={this.props.addCount}
                                                                             subtractCount={this.props.subtractCount}
                                                                             // totalPrice={this.calcTotalPrice}
                                                                             img={item.img}
                                                                             del={this.props.delItem}
                                                                             key={index}/>)
            return <div className={s.cart}>
                <h1>Корзина</h1>
                <div className={s.cart__tables}>
                    <div className={s.cart__tables_headers + " " + s.cart__tables_grid}>
                        <div className={s.cart__tables_title}></div>
                        <div className={s.cart__tables_title}>Товар</div>
                        <div className={s.cart__tables_title}>Цена</div>
                        <div className={s.cart__tables_title}>Количество</div>
                        <div className={s.cart__tables_title}>Сумма</div>
                        <div className={s.cart__tables_title}>Удалить</div>
                    </div>
                    {itemsElements}
                </div>
            </div>
        } else {
            return <div>
                Корзина пуста
            </div>
        }


    }
}

let mapStateToProps = (state) => ({
    items: state.cart.items,
    amount: state.cart.amount
});

export default compose(
    connect(mapStateToProps, {delItem, addItem, addCount, subtractCount}),
)(Cart);


